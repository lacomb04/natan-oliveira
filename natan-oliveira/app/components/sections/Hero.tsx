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
          src="/images/logoHero.webp"
          alt="Logo Natan Oliveira"
          width={300}
          height={110}
          className="h-auto w-[clamp(220px,55vw,340px)] drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Pattern vertical */}
      <div className="absolute z-2 hidden left-[1%] top-[15%] drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] sm:block md:left-[6%] md:top-[12%] lg:left-[7%] lg:top-[10%] xl:left-[8%] xl:top-[10%] [@media(max-height:700px)]:top-[8%]">
        <Image
          src="/images/Pattern_Vertical-2.webp"
          alt="pattern vertical"
          width={80}
          height={800}
          className="w-[clamp(40px,6vw,90px)] h-auto origin-top [@media(max-height:800px)]:scale-90 [@media(max-height:700px)]:w-[clamp(32px,5vw,70px)] [@media(max-height:700px)]:scale-80 [@media(max-height:600px)]:scale-70 [@media(max-height:520px)]:scale-60 [@media(max-height:450px)]:scale-50"
        />
      </div>

      {/*
        FIXED: Content block with logo + slogan + button.
        On desktop (sm+), use bottom positioning but clamp it so it never
        overlaps the footer text at bottom-2 (~8px).
        The footer text is ~1 line of text-caption (~16px) + 2px bottom = ~26px total.
        We add extra breathing room (bottom-10 = 40px on sm) so nothing overlaps.
        On very short screens we reduce gap further with max-height variants,
        and hide the slogan / shrink button so the block stays compact.
      */}
      <div
        className="
          absolute z-30 flex max-w-[320px] flex-col items-center gap-2 text-center

          /* MOBILE: keep near bottom but leave room for social icons (bottom-24)
             and don't go below them */
          left-1/2 bottom-8 -translate-x-1/2

          /* SM+: anchor to bottom with enough clearance for the footer text (~32px)
             plus comfortable padding.  We use bottom-10 (40px) as the minimum so
             the button never sits on top of the footer text. */
          sm:left-[30%] sm:bottom-10 sm:translate-x-0 sm:items-center sm:text-center
          md:left-[32%] md:bottom-10
          lg:left-[20%] lg:top-[22%] lg:bottom-auto
          xl:left-[22%] xl:top-[20%]

          /* Short screens: shrink gap and nudge up a bit, but keep the
             bottom clearance so we never overlap the footer text */
          [@media(max-height:700px)]:gap-1 [@media(max-height:700px)]:bottom-10
          [@media(max-height:600px)]:bottom-9
          [@media(max-height:520px)]:bottom-9
        "
      >
        {/* Logo */}
        <Image
          src="/images/logoHero.webp"
          alt="Logo Natan Oliveira"
          width={220}
          height={80}
          className="hidden h-auto w-[clamp(200px,44vw,270px)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:block"
        />

        {/* Slogan — hide on very short screens so the block stays compact */}
        <Image
          src="/images/deOndeAGenteVem.webp"
          alt="De onde a gente vem importa"
          width={400}
          height={400}
          className="
            h-auto w-[66vw] max-w-[240px]
            sm:w-[clamp(200px,30vw,270px)] origin-top
            [@media(max-height:800px)]:scale-90
            [@media(max-height:700px)]:w-[58vw] [@media(max-height:700px)]:max-w-[210px] [@media(max-height:700px)]:scale-80
            [@media(max-height:600px)]:max-w-[190px] [@media(max-height:600px)]:scale-70
            [@media(max-height:520px)]:hidden
          "
        />

        <p className="text-caption font-body mt-2 max-w-[260px] text-white/85 sm:hidden">
          Professor, bibliotecario e vereador de Nova Serrana/MG.
        </p>

        {/*
          FIXED button: removed negative mb values that pushed it down
          toward the footer. The bottom clearance on the parent container
          now handles the spacing.
        */}
        <a
          className="
            btn mt-2 text-xs
            sm:text-sm
            [@media(max-height:760px)]:mt-1 [@media(max-height:760px)]:text-[10px]
            [@media(max-height:760px)]:px-3 [@media(max-height:760px)]:py-1.5
            [@media(max-height:600px)]:scale-95
            [@media(max-height:520px)]:scale-90
          "
          href="#trajetoria"
        >
          Conheça minha Trajetória
        </a>
      </div>

      {/* Imagem principal */}
      <div className="relative h-screen w-full overflow-hidden lg:h-[80vh]">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* MOBILE */}
          <Image
            src="/images/natan-hero-mobile.webp"
            alt="Natan Oliveira"
            fill
            className="object-cover scale-160 lg:hidden [@media(max-height:500px)]:hidden"
            priority
          />

          {/* DESKTOP */}
          <Image
            src="/images/natan-hero.webp"
            alt="Natan Oliveira"
            fill
            className="hidden object-cover lg:block [@media(max-height:500px)]:block"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/15 to-transparent" />

        {/*
          FIXED gradient: increased gradient height from 35% to 42% on short
          screens so the footer text remains readable and distinct from the
          content block above it.
        */}
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-black/80 via-black/25 to-transparent [@media(max-height:760px)]:h-[42%]" />
      </div>

      {/* Social icons — mobile only */}
      <div className="absolute bottom-24 right-5 z-30 flex flex-col items-center gap-3 sm:hidden">
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://www.instagram.com/nattannoliveira/"
          aria-label="Instagram"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/icons/IconIntagram.png"
            alt="Instagram"
            className="h-5 w-5"
            loading="lazy"
          />
        </a>
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://www.facebook.com/natanoliveiravozes"
          aria-label="Facebook"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/icons/IconFacebook.svg"
            alt="Facebook"
            className="h-5 w-5"
            loading="lazy"
          />
        </a>
        <a
          className="rounded-full bg-white/15 p-3 transition hover:bg-brand-blue/90"
          href="https://www.tiktok.com/@natan_oliveira12?_r=1&_t=ZS-96HMXCLQMh6"
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
          href="https://youtube.com/@nattannoliveira?si=ZYn2Q06gA50pq2VH"
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
          href="https://wa.me/5537991242690"
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

      {/* Texto rodapé — desktop only */}
      <p className="text-caption font-body absolute bottom-2 left-1/2 hidden w-[90%] -translate-x-1/2 text-center font-semibold tracking-wide text-white sm:block">
        Professor, bibliotecario, vereador de Nova Serrana/MG e pre-candidato a
        deputado estadual por Minas Gerais.
      </p>
    </section>
  );
}
