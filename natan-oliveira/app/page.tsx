import Image from "next/image";
import Hero from "./components/sections/Hero";
import Historia from "./components/sections/Historia";
import Trajetoria from "./components/sections/Trajetoria";
import Manifesto from "./components/sections/Manifesto";
import RedesSociais from "./components/sections/RedesSociais";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-white">
      <Hero />
      <Historia />
      <Trajetoria />
      <Manifesto />
      <div className="relative h-0">
        <div className="pointer-events-none absolute right-0 top-0 z-20 w-[60vw] -translate-y-1/2 sm:w-1/2">
          <Image
            src="/images/Pattern_Horizontal.png"
            alt="Pattern horizontal"
            width={1200}
            height={200}
            className="ml-auto h-auto w-full max-w-[520px] min-w-[220px]"
          />
        </div>
      </div>
      <RedesSociais />
      <Footer />
    </main>
  );
}
