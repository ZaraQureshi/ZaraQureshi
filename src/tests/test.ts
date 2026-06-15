from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevance
from datasets import Dataset

# Define your evaluation data
data = {
    "question": ["What projects has Zara built with LLMs?", "Does she know Rust?"],
    "contexts": [
        ["Zara built an Intelligent Jira Ticket Triage System using NLP and serverless proxy routes on Cloudflare Workers."], 
        ["Zara's skills include React, TypeScript, Node.js, and .NET. No mention of Rust."]
    ],
    "answer": [
        "Zara built an intelligent Jira triage system that handles ticket priority using NLP.",
        "I don't have information about Rust in Zara's portfolio. Please contact her at zaraqureshidev@gmail.com."
    ]
}

dataset = Dataset.from_dict(data)
score = evaluate(dataset, metrics=[faithfulness, answer_relevance])
print(score)