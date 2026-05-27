"use client";

import { useEffect, useState } from "react";

export default function FloatingDonate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://apoie.natannoliveira.com.br/"
      target="_blank"
      rel="noreferrer"
      className={
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-3 font-bold uppercase tracking-wide text-brand-blue shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl " +
        (visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0")
      }
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      Apoie Natan
    </a>
  );
}
