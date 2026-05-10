"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HeroNav from "../ui/HeroNav";

export default function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const currentOffsetRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      const current = currentOffsetRef.current;
      const target = targetOffsetRef.current;
      const next = current + (target - current) * 0.08;

      currentOffsetRef.current = next;
      setParallaxOffset(next);

      if (Math.abs(target - next) > 0.1) {
        rafIdRef.current = window.requestAnimationFrame(animate);
      } else {
        rafIdRef.current = null;
      }
    };

    const handleScroll = () => {
      targetOffsetRef.current = window.scrollY * 0.12;
      if (rafIdRef.current === null) {
        rafIdRef.current = window.requestAnimationFrame(animate);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <section className="relative flex overflow-visible h-screen sm:h-auto">
      <HeroNav />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-20 bg-linear-to-b from-black/35 via-black/20 to-transparent" />

      <div className="absolute top-[72px] left-1/2 z-30 -translate-x-1/2 sm:hidden">
        <Image
          src="/images/logoHero.png"
          alt="Logo Natan Oliveira"
          width={300}
          height={110}
          className="h-auto w-[clamp(220px,55vw,340px)] drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Pattern vertical */}
      <div className="absolute z-20 hidden left-[1%] top-[15%] drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] sm:block md:left-[6%] md:top-[12%] lg:left-[7%] lg:top-[10%] xl:left-[8%] xl:top-[10%]">
        <Image
          src="/images/Pattern_Vertical 2.png"
          alt="pattern vertical"
          width={80}
          height={800}
          className="w-[clamp(40px,6vw,90px)] h-auto [@media(max-height:500px)]:hidden"
        />
      </div>

      <div
        className="absolute z-20 flex max-w-[320px] flex-col items-center gap-2 text-center
      left-1/2 bottom-8 -translate-x-1/2

      sm:left-[30%] sm:bottom-[16%] sm:translate-x-0 sm:items-center sm:text-center
      md:left-[32%] md:bottom-[16%]
      lg:left-[20%] lg:top-[22%] lg:bottom-auto
      xl:left-[22%] xl:top-[20%]"
      >
        {/* Logo */}
        <Image
          src="/images/logoHero.png"
          alt="Logo Natan Oliveira"
          width={220}
          height={80}
          className="hidden h-auto w-[clamp(200px,44vw,270px)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:block"
        />

        {/* Slogan */}
        <Image
          src="/images/deOndeAGenteVem.png"
          alt="De onde a gente vem importa"
          width={400}
          height={400}
          className="h-auto w-[66vw] max-w-[240px] sm:w-[clamp(200px,30vw,270px)] [@media(max-height:500px)]:hidden"
        />

        <p className="text-caption font-body mt-1 max-w-[260px] text-white/85 sm:hidden">
          Professor, bibliotecario e vereador de Nova Serrana/MG.
        </p>

        <a className="btn mt-3 text-xs sm:text-sm" href="#trajetoria">
          Conheça minha Tragetória
        </a>
      </div>

      {/* Imagem principal */}
      <div className="relative h-screen w-full overflow-hidden  lg:h-[60vh] lg:h-[80vh]">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* MOBILE */}
          <Image
            src="/images/natan-hero-mobile.jpg"
            alt="Natan Oliveira"
            fill
            className="object-cover scale-160  lg:hidden [@media(max-height:500px)]:hidden"
            priority
          />

          {/* DESKTOP */}
          <Image
            src="/images/natan-hero.png"
            alt="Natan Oliveira"
            fill
            className="hidden object-cover  lg:block [@media(max-height:500px)]:block"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-black/80 via-black/25 to-transparent" />
      </div>

      <div className="absolute bottom-24 right-5 z-30 flex flex-col items-center gap-3 sm:hidden">
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://instagram.com"
          aria-label="Instagram"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://cdn.simpleicons.org/instagram/ffffff"
            alt="Instagram"
            className="h-5 w-5"
            loading="lazy"
          />
        </a>
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://tiktok.com"
          aria-label="TikTok"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/icons/tiktok.svg"
            alt="TikTok"
            className="h-5 w-5"
            loading="lazy"
          />
        </a>
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://youtube.com"
          aria-label="YouTube"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/icons/youtube.svg"
            alt="YouTube"
            className="h-5 w-5"
            loading="lazy"
          />
        </a>
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://wa.me/"
          aria-label="WhatsApp"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            className="h-5 w-5"
            loading="lazy"
          />
        </a>
      </div>
      {/* Texto rodapé */}
      <p className="text-caption font-body absolute bottom-6 left-1/2 hidden w-[90%] -translate-x-1/2 text-center font-semibold tracking-wide text-white sm:block">
        Professor, bibliotecario, vereador de Nova Serrana/MG e pre-candidato a
        deputado estadual por Minas Gerais.
      </p>
    </section>
  );
}
