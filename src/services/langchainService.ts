import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import zaraData from "../../public/info.json"; // Adjust path if needed
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// 1. Initialize the LLM
// Note: Ensure your process.env.REACT_APP_OPENAI_API_KEY or VITE_OPENAI_API_KEY is configured
const model = new ChatGoogleGenerativeAI({
  // Point LangChain directly to your Cloudflare Worker routing address
  baseUrl: import.meta.env.VITE_WORKER_URL,
  apiKey: "PROXYMANAGEDKEY",
  
  model: "gemini-2.5-flash", // Gemini 1.5 Flash is incredibly fast and highly accurate for RAG
  maxOutputTokens: 2048,
  temperature: 0.2, // Keeps responses focused directly on the facts in the JSON
});
console.log(model)
// 2. Prepare the static JSON context as a string for the model prompt. Using In-Context RAG since json data is small
const portfolioContext = JSON.stringify(zaraData.zara, null, 2);
// 3. Define the System Prompt Template
const promptTemplate = PromptTemplate.fromTemplate(`
  You are an enthusiastic, professional AI assistant representing Zara Qureshi, a Software Engineer.
  Your goal is to answer questions from recruiters and visitors based strictly on her portfolio details provided below.

  Zara's Portfolio Information:
  {context}

  User Question: {question}

  Guidelines:
  - Be concise, professional, and friendly.
  - Base your answers *only* on the provided context.
  - If a user asks about a skill, project, or experience not mentioned in the context, politely state that you don't have that information but invite them to contact Zara at zaraqureshidev@gmail.com.
  - Provide direct markdown links to her GitHub or project websites if relevant to the query.

  Answer:
`);

// 4. Build the LangChain Expression Language (LCEL) Pipeline
export async function askPortfolioBot(userQuestion:string) {
  try {
    const chain = promptTemplate.pipe(model).pipe(new StringOutputParser());
    
    const response = await chain.invoke({
      context: portfolioContext,
      question: userQuestion,
    });
    return response;
  } catch (error) {
    console.error("LangChain Error:", error);
    return "I ran into a small connectivity hiccup processing that request! Please feel free to check out my traditional experience cards above or drop me an email at zaraqureshidev@gmail.com.";
  }
}