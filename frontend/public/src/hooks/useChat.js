import { useState } from "react";
import { sendMessage } from "../api/chatApi";

export const useChat = () => {
  const [messages, setMessages] = useState([]);

  const sendChat = async (message) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    const response = await sendMessage(
      message
    );

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: JSON.stringify(response),
      },
    ]);
  };

  return {
    messages,
    sendChat,
  };
};