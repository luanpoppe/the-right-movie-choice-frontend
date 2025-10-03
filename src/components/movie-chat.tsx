"use client";

import type React from "react";
import { useState, useEffect } from "react";
// import { useChat } from "@ai-sdk/react";
// import { DefaultChatTransport } from "ai";
import { Send, Film, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import type { MovieChatMessage } from "@/app/api/chat/route";
import { ChatMessage } from "./chat-message";
import { MovieCard } from "./movie-card";

const MOCK_MESSAGES = [
  {
    id: "mock-1",
    role: "user" as const,
    parts: [
      {
        type: "text" as const,
        text: "I want to watch an action movie with great fight scenes",
      },
    ],
  },
  {
    id: "mock-2",
    role: "assistant" as const,
    parts: [
      {
        type: "text" as const,
        text: "Great choice! I've selected three action-packed films with incredible fight choreography that will keep you on the edge of your seat. Each one offers a unique style of action and storytelling.",
      },
      {
        type: "data" as const,
        data: {
          movies: [
            {
              title: "John Wick",
              year: 2014,
              director: "Chad Stahelski",
              genre: ["Action", "Thriller", "Crime"],
              rating: 7.4,
              duration: 101,
              synopsis:
                "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
              reason:
                "Features some of the most innovative and brutal fight choreography in modern cinema, with Keanu Reeves performing most of his own stunts.",
            },
            {
              title: "The Raid",
              year: 2011,
              director: "Gareth Evans",
              genre: ["Action", "Thriller", "Martial Arts"],
              rating: 7.6,
              duration: 101,
              synopsis:
                "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.",
              reason:
                "Widely considered one of the best action films ever made, with relentless Indonesian martial arts sequences that are absolutely jaw-dropping.",
            },
            {
              title: "Mad Max: Fury Road",
              year: 2015,
              director: "George Miller",
              genre: ["Action", "Adventure", "Sci-Fi"],
              rating: 8.1,
              duration: 120,
              synopsis:
                "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
              reason:
                "A masterclass in practical action filmmaking with stunning vehicular combat and chase sequences that are both beautiful and brutal.",
            },
          ],
        },
      },
    ],
  },
];

export function MovieChat() {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [showMockData, setShowMockData] = useState(true);

  // const { messages, sendMessage, status } = useChat<MovieChatMessage>({
  //   transport: new DefaultChatTransport({ api: "/api/chat" }),
  // });

  const messages: any[] = [];

  useEffect(() => {
    if (messages.length > 0) {
      setShowMockData(false);
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as any).message.value.trim();
    if (!input) return;

    setHasStartedChat(true);
    // sendMessage({ text: input });
    (e.target as any).message.value = "";
  };

  const handleReset = () => {
    setHasStartedChat(false);
    setShowMockData(true);
    window.location.reload(); // Reloads to clear chat state
  };

  const isLoading = status === "in_progress";

  const displayMessages = showMockData ? MOCK_MESSAGES : messages;

  if (!hasStartedChat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-30 rounded-full" />
              <div className="relative rounded-3xl bg-gradient-to-br from-primary to-accent p-8 shadow-2xl shadow-primary/30">
                <Film className="w-20 h-20 text-primary-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                Find Your Perfect Movie
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                Tired of scrolling endlessly? Tell me what you're in the mood
                for, and I'll recommend three amazing movies tailored just for
                you.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-card/50 border border-border/50 p-6 space-y-3 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">AI-Powered</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smart recommendations based on your preferences and mood
              </p>
            </div>

            <div className="rounded-2xl bg-card/50 border border-border/50 p-6 space-y-3 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Film className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Curated Selection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Three carefully chosen movies with detailed information
              </p>
            </div>

            <div className="rounded-2xl bg-card/50 border border-border/50 p-6 space-y-3 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Interactive Chat</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Refine your search with follow-up questions anytime
              </p>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                name="message"
                placeholder="What kind of movie are you looking for? (e.g., 'a thrilling sci-fi movie' or 'something funny to watch with friends')"
                disabled={isLoading}
                className="h-16 text-lg rounded-2xl bg-card/80 border-border/50 pr-16 shadow-lg focus-visible:ring-2 focus-visible:ring-primary/20"
                autoComplete="off"
                autoFocus
              />
              <Button
                type="submit"
                disabled={isLoading}
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl h-12 w-12 bg-gradient-to-br from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-muted-foreground">Try:</span>
              {[
                "Action thriller",
                "Romantic comedy",
                "Mind-bending sci-fi",
                "Feel-good drama",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="text-sm px-4 py-1.5 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors border border-accent/20"
                  onClick={() => {
                    const input = document.querySelector(
                      'input[name="message"]'
                    ) as HTMLInputElement;
                    if (input) {
                      input.value = suggestion;
                      input.focus();
                    }
                  }}
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>
        </div>
      </div>
    );
  }

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
        {displayMessages.map((message) => (
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
