import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import axios from "axios";

export default function ChatBot() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Push user message
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
    <div>
      <div
        className="w-screen h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1407983969/photo/aerial-landscape-with-green-hills-river-and-forest.jpg?s=612x612&w=0&k=20&c=Q89WTjFahfIaKi_sxadafVZMhrVkZrtfWyk3co-qldI=')",
        }}
      ></div>

      <div className="fixed bottom-4 right-4 z-50">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
          >
            <MessageCircle size={24} />
          </button>
        )}

        {open && (
          <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
            <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
              <h2 className="text-sm font-semibold">Jharkhand Tourism Bot</h2>
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm text-black">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-blue-100 ml-auto text-right"
                      : "bg-gray-100 mr-auto"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t p-2 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about Jharkhand tourism..."
                className="flex-1 text-sm text-black border rounded-lg px-2 py-1 focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
