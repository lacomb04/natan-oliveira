import Image from "next/image";
import HeroNav from "../ui/HeroNav";

export default function Hero() {
  return (
    <section className="relative flex overflow-visible h-screen sm:h-auto">
      <HeroNav />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-20 bg-linear-to-b from-black/35 via-black/20 to-transparent" />

      {/* Pattern vertical */}
      <div className=" absolute z-20 left-[1%] top-[15%]  md:left-[6%] md:top-[12%] lg:left-[7%] lg:top-[10%] xl:left-[8%] xl:top-[10%] drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
        <Image
          src="/images/Pattern_Vertical 2.png"
          alt="pattern vertical"
          width={80}
          height={800}
          className="w-[clamp(40px,6vw,90px)] h-auto"
        />
      </div>

      <div
        className="absolute z-20 flex flex-col items-center
  left-1/2 -translate-x-1/2 bottom-[14%]

  sm:left-[30%] sm:translate-x-0 sm:bottom-[16%]
  md:left-[32%] md:bottom-[16%]
  lg:left-[20%] lg:top-[22%] lg:bottom-auto
  xl:left-[22%] xl:top-[20%]"
      >
        {/* Slogan */}
        <Image
          src="/images/deOndeAGenteVem.png"
          alt="De onde a gente vem importa"
          width={400}
          height={400}
          className="w-[90vw] sm:w-[clamp(200px,30vw,270px)] h-auto"
        />

        {/* Logo */}
        <Image
          src="/images/logoHero.png"
          alt="Logo Natan Oliveira"
          width={220}
          height={80}
          className="w-[clamp(160px,18vw,220px)] h-auto mt-4"
        />
      </div>

      {/* Imagem principal */}
      <div className="relative h-screen w-full overflow-hidden  lg:h-[60vh] lg:h-[70vh]">
        {/* MOBILE */}
        <Image
          src="/images/natan-hero-mobile.jpg"
          alt="Natan Oliveira"
          fill
          className="object-cover scale-160  lg:hidden"
          priority
        />

        {/* DESKTOP */}
        <Image
          src="/images/natan-hero.png"
          alt="Natan Oliveira"
          fill
          className="hidden object-cover lg:block"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-black/80 via-black/25 to-transparent" />
      </div>
      {/* Texto rodapé */}
      <p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] text-center text-[clamp(14px,1.2vw,15px)] font-semibold tracking-wide text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Professor, bibliotecario, vereador de Nova Serrana/MG e pre-candidato a
        deputado estadual por Minas Gerais.
      </p>
    </section>
  );
}
