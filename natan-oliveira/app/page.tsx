import Image from "next/image";
import Hero from "./components/sections/Hero";
import Historia from "./components/sections/Historia";
import Trajetoria from "./components/sections/Trajetoria";
import Manifesto from "./components/sections/Manifesto";
import RedesSociais from "./components/sections/RedesSociais";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-white">
      <Hero />
      <Historia />
      <Trajetoria />
      <Manifesto />
      <section className="w-full bg-transparent">
        <div className="mx-auto flex w-full max-w-6xl justify-end px-4 py-6 md:px-6 md:py-8">
          <Image
            src="/images/Pattern_Horizontal.png"
            alt="Pattern horizontal"
            width={1200}
            height={200}
            className="h-auto w-1/2 min-w-[220px] max-w-[520px]"
          />
        </div>
      </section>
      <RedesSociais />
    </main>
  );
}
