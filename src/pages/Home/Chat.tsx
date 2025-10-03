import { Send, Film, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "@/components/chat-message";
import { MovieCard } from "@/components/movie-card";

interface ChatProps {
  handleReset: () => void;
  displayMessages: any[];
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Chat({
  handleReset,
  displayMessages,
  isLoading,
  handleSubmit,
}: ChatProps) {
  return (
    <div className="flex-1 flex flex-col container mx-auto max-w-5xl px-6 py-8">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Film className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold">Movie Recommendations</h2>
        </div>
        <Button
          onClick={handleReset}
          variant="outline"
          size="sm"
          className="rounded-xl gap-2 hover:bg-accent/10 hover:text-accent hover:border-accent/50 transition-colors bg-transparent"
        >
          <RotateCcw className="w-4 h-4" />
          New Search
        </Button>
      </div>

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

        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
            </div>
            <span className="text-sm">Finding perfect movies for you...</span>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 bg-background/80 backdrop-blur-xl pt-6 pb-4"
      >
        <div className="flex gap-3 p-2 rounded-3xl bg-card/80 border border-border/50 shadow-lg">
          <Input
            name="message"
            placeholder="Describe the type of movie you want to watch..."
            disabled={isLoading}
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            autoComplete="off"
          />
          <Button
            type="submit"
            disabled={isLoading}
            size="icon"
            className="rounded-2xl h-11 w-11 bg-gradient-to-br from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
