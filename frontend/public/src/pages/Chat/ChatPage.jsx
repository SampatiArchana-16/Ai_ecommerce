import ChatWindow from "../../components/chatbot/ChatWindow";
import ChatInput from "../../components/chatbot/ChatInput";

import { useChat } from "../../hooks/useChat";

function ChatPage() {
  const {
    messages,
    sendChat,
  } = useChat();

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">

      <div className="p-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          PriceWise AI
        </h1>
      </div>

      <ChatWindow messages={messages} />

      <ChatInput onSend={sendChat} />
    </div>
  );
}

export default ChatPage;