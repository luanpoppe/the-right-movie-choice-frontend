// import { useChat } from "@ai-sdk/react";
// import { DefaultChatTransport } from "ai";
// import type { MovieChatMessage } from "@/app/api/chat/route";
import { useState, useEffect } from "react";
import { MOCK_MESSAGES } from "@/utils/mock-messages";
import { Chat } from "@/features/chat";
import { Welcome } from "@/features/welcome";

export function Home() {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [showMockData, setShowMockData] = useState(true);

  // const { messages, sendMessage, status } = useChat<MovieChatMessage>({
  //   transport: new DefaultChatTransport({ api: "/api/chat" }),
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as any).message.value.trim();
    if (!input) return;

    setHasStartedChat(true);
    // sendMessage({ text: input });
    (e.target as any).message.value = "";
  };

  const messages: any[] = [];

  useEffect(() => {
    if (messages.length > 0) {
      setShowMockData(false);
    }
  }, [messages]);

  const handleReset = () => {
    setHasStartedChat(false);
    setShowMockData(true);
    window.location.reload(); // Reloads to clear chat state
  };

  const isLoading = status === "in_progress";

  const displayMessages = showMockData ? MOCK_MESSAGES : messages;

  if (!hasStartedChat) {
    return <Welcome handleSubmit={handleSubmit} isLoading={isLoading} />;
  }

  return (
    <Chat
      handleReset={handleReset}
      displayMessages={displayMessages}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}
