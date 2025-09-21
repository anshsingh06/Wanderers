import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      if (res.data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: res.data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "⚠ No reply from server." },
        ]);
      }
    } catch (err) {
      console.error("Frontend fetch error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠ Error connecting to server." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-[#1e6b3e] text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Jharkhand Explorer</h1>
        <button className="hover:opacity-80">
          <X size={22} />
        </button>
      </div>

      {/* Messages */}
<div className="flex-1 bg-gradient-to-r from-green-900 to-green-700 p-6 overflow-y-auto space-y-3 text-sm">
  {messages.length === 0 && (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Discover the Beauty of{" "}
        <span className="text-yellow-500">Jharkhand</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
        Your AI-powered travel companion for exploring the land of forests,
        waterfalls, and rich culture
      </p>
    </div>
  )}

  {messages.map((msg, idx) => (
    <div
      key={idx}
      className={`p-3 rounded-lg max-w-[75%] ${
        msg.role === "user"
          ? "bg-[#e6f4ea] ml-auto text-right text-black"
          : "bg-white border mr-auto text-black"
      }`}
    >
      {msg.content}
    </div>
  ))}
</div>




      {/* Input Area */}
      <div className="border-t p-4 flex bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Jharkhand tourism..."
          className="flex-1 text-sm text-black border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e6b3e]"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-[#1e6b3e] text-white px-5 py-2 rounded-lg hover:bg-[#155c31] text-sm transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}


