"use client";

import Image from "next/image";
import HeroNav from "../ui/HeroNav";

export default function Hero() {
  return (
    <section id="top" className="relative flex flex-col pt-16 md:pt-20">
      <HeroNav />

      {/* MOBILE */}
      <Image
        src="/images/banner-hero-mobile.png"
        alt="Natan Oliveira"
        width={1080}
        height={1920}
        priority
        className="h-auto w-full md:hidden"
      />

      {/* DESKTOP */}
      <Image
        src="/images/banner-hero-desktop.png"
        alt="Natan Oliveira"
        width={1920}
        height={1080}
        priority
        className="hidden h-auto w-full md:block"
      />
    </section>
  );
}