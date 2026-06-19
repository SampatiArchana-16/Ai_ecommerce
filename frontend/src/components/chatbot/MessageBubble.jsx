function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] p-4 rounded-2xl ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default MessageBubble;