import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-5">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          role={msg.role}
          content={msg.content}
        />
      ))}
    </div>
  );
}

export default ChatWindow;