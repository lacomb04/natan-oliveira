import Hero from "./components/sections/Hero";
import Historia from "./components/sections/Historia";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-white">
      <Hero />
      <Historia />
    </main>
  );
}
