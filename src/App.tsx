import { MovieChat } from "./components/movie-chat";
import { Header } from "./layouts/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-accent/5">
      <Header />

      <MovieChat />
    </main>
  );
}
