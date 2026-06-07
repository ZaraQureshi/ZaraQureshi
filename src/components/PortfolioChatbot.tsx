import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { askPortfolioBot } from "../services/langchainService"; // Import LangChain utility
export function PortfolioChatbot() {


  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Zara's LangChain assistant. Ask me anything about her development stack, history at Xoriant, or recent AI projects!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const suggestions = [
    "What is your tech stack?",
    "Tell me about the Jira Automation project.",
    "What did you accomplish at Xoriant?",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (textToSend: any) => {
    if (!textToSend.trim()) return;

    // Append user message immediately
    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInput("");
    setIsTyping(true);

    try {

      // Invoke the LangChain RAG pipeline
      const aiReply = await askPortfolioBot(textToSend);

      setMessages((prev) => [...prev, { sender: "bot", text: aiReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm experiencing a bit of heavy traffic right now! Please try asking again in a few seconds." }
      ]);
    } finally {
      setIsTyping(false); // Re-enable the interface
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-800 hover:bg-pink-500 text-white p-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-gray-900 border border-gray-800 text-gray-100 rounded-2xl w-[90vw] sm:w-[400px] h-[500px] shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
            <span className="font-semibold text-sm text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LangChain Portfolio Bot
            </span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col bg-gray-950/40 no-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-line ${msg.sender === "user"
                    ? "bg-pink-600 text-white self-end rounded-br-none"
                    : "bg-gray-800 text-gray-200 self-start rounded-bl-none border border-gray-700"
                  }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-gray-800 text-gray-400 max-w-[40%] rounded-xl px-3.5 py-2 text-sm self-start rounded-bl-none flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Suggestions Layer */}
          <div className="p-2 border-t border-gray-800/60 bg-gray-950/20 flex flex-wrap gap-1.5">
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(sug)}
                className="text-xs bg-gray-800 hover:bg-gray-700 text-pink-300 px-2.5 py-1 rounded-full transition border border-gray-700"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Form Footer */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-950 border border-gray-800 focus:border-pink-500 rounded-xl px-4 py-2 text-sm outline-none text-white transition"
            />
            <button type="submit" className="bg-pink-600 hover:bg-pink-500 p-2 rounded-xl text-white transition">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}