import Image from "next/image";
import HeroNav from "../ui/HeroNav";

export default function Hero() {
  return (
    <section className="relative flex overflow-visible">
      <HeroNav />

      {/* Pattern vertical */}
      <div className="hidden sm:block absolute z-20 left-[4%] top-[4%]  md:left-[6%] md:top-[12%] lg:left-[7%] lg:top-[10%] xl:left-[8%] xl:top-[10%] drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
        <Image
          src="/images/Pattern_Vertical 2.png"
          alt="pattern vertical"
          width={80}
          height={800}
          className="w-[clamp(42px,6vw,90px)] h-auto"
        />
      </div>

      {/* Slogan */}
      <div className="absolute z-20 left-[14%] top-[24%] sm:left-[18%] sm:top-[20%] md:left-[18%] md:top-[20%] lg:left-[20%] lg:top-[22%] xl:left-[22%] xl:top-[20%]">
        <Image
          src="/images/deOndeAGenteVem.png"
          alt="De onde a gente vem importa"
          width={400}
          height={400}
          className="w-[clamp(130px,30vw,290px)] h-auto"
        />
      </div>

      {/* Logo Natan */}
      <div className="absolute z-20 right-[6%] bottom-[14%] sm:right-[8%] sm:bottom-[12%] md:right-[4%] md:bottom-[8%]">
        <Image
          src="/images/logoHero.png"
          alt="Logo Natan Oliveira"
          width={220}
          height={80}
          className="w-[clamp(120px,18vw,220px)] h-auto"
        />
      </div>

      {/* Imagem principal */}
      <div className="relative h-[42vh] min-h-55 max-h-170 w-full sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/natan-hero.png"
          alt="Natan Oliveira"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-black/80 via-black/25 to-transparent" />
      </div>

      {/* Texto rodapé */}
      <p
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] text-center text-[clamp(11px,1.2vw,14px)] font-semibold tracking-wide text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Professor, bibliotecario, vereador de Nova Serrana/MG e pre-candidato a
        deputado estadual por Minas Gerais.
      </p>
    </section>
  );
}
