import { useState } from "react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-3 p-4 border-t border-slate-800">
      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask anything..."
        className="flex-1 p-4 rounded-xl bg-slate-800 text-white outline-none"
      />

      <button
        onClick={handleSend}
        className="px-6 py-3 bg-blue-600 rounded-xl"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;