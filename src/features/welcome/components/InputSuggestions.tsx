interface InputSuggestionsProps {
  isLoading: boolean;
}

export function InputSuggestions({ isLoading }: InputSuggestionsProps) {
  return (
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
  );
}
