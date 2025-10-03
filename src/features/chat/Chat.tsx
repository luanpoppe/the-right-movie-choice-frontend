import { ChatForm } from "./components/ChatForm";
import { ChatMessage } from "@/components/chat-message";
import { MovieCard } from "@/components/movie-card";
import { GoBackButton } from "./components/GoBackButton";
import { LoadingScreen } from "./components/LoadingScreen";

interface ChatProps {
  handleReset: () => void;
  displayMessages: any[];
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Chat({
  handleSubmit,
  isLoading,
  displayMessages,
  handleReset,
}: ChatProps) {
  return (
    <div className="flex-1 flex flex-col container mx-auto max-w-5xl px-6 py-8">
      <GoBackButton handleReset={handleReset} />

      <div className="flex-1 space-y-8 mb-6">
        {displayMessages.map((message: any) => (
          <div key={message.id} className="space-y-6">
            {message.parts.map((part: any, index: any) => {
              if (part.type === "text") {
                return (
                  <ChatMessage
                    key={index}
                    role={message.role}
                    content={part.text}
                  />
                );
              }

              if (part.type === "data" && part.data.movies) {
                return (
                  <div key={index} className="grid gap-5 md:grid-cols-3">
                    {part.data.movies.map((movie: any, movieIndex: number) => (
                      <MovieCard key={movieIndex} movie={movie} />
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}

        {isLoading && <LoadingScreen />}
      </div>

      <ChatForm handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
