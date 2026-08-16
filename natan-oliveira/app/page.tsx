import Hero from "./components/sections/Hero";
import Historia from "./components/sections/Historia";
import Trajetoria from "./components/sections/Trajetoria";
import Manifesto from "./components/sections/Manifesto";
import Noticias from "./components/sections/Noticias";
import RedesSociais from "./components/sections/RedesSociais";
import Livro from "./components/sections/Livro";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Historia />
      <Trajetoria />
      <Livro />
      <Manifesto />
      <Noticias />
      <RedesSociais />
      <Footer />
    </>
  );
}
