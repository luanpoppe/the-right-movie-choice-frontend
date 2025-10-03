import { Send, Film, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WelcomeProps {
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Welcome({ isLoading, handleSubmit }: WelcomeProps) {
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
              Tired of scrolling endlessly? Tell me what you're in the mood for,
              and I'll recommend three amazing movies tailored just for you.
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
