import { useState } from "react";
import { Chat } from "@/features/chat";
import { Welcome } from "@/features/welcome";
import { ChatEntity } from "@/features/chat/entities/chat.entity";
import { MovieRecommendationService } from "@/features/movies/services/movie-recommendation.service";
import toast from "react-hot-toast";
import { env } from "@/utils/env";

export function Home() {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [messages, setMessages] = useState<ChatEntity>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const input = target.message.value.trim();
    if (!input) return;

    setMessages([...messages, { from: "user", message: input }]);
    setHasStartedChat(true);
    target.message.value = "";
    setIsLoading(true);

    const chatId = crypto.randomUUID();
    try {
      const { movies, response } =
        await MovieRecommendationService.getRecommendations(chatId);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          from: "ai",
          message: response,
          movies: movies,
        },
      ]);
    } catch (error: any) {
      console.error(error.message);
      toast.error(
        "Unexpected Error. Try again or get in contact with the staff."
      );
      if (env.VITE_NODE_ENV !== "prod") throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setHasStartedChat(false);
    setMessages([]);
    setIsLoading(false);
  };

  if (!hasStartedChat) {
    return <Welcome handleSubmit={handleSubmit} isLoading={isLoading} />;
  }

  return (
    <Chat
      handleReset={handleReset}
      displayMessages={messages}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}
