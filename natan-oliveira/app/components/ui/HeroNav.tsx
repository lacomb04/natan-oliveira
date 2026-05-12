"use client";

const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const href = event.currentTarget.getAttribute("href");

  if (!href || !href.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HeroNav() {
  return (
    <nav className="absolute left-1/2 top-6 z-40 w-[min(92vw,1100px)] -translate-x-1/2 text-white sm:top-20 md:top-5">
      <div className="flex flex-col items-center gap-2 text-center font-heading md:flex-row md:justify-between md:gap-3 sm:text-left">
        <div className="hero-landscape-nav-links-hidden flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-white transition-all duration-300 sm:justify-start sm:gap-8 sm:text-caption">
          <a
            className="rounded-full border border-white/40 px-3 py-1 transition-colors hover:border-brand-yellow hover:text-brand-yellow sm:border-transparent sm:px-0 sm:py-0"
            href="#historia"
            onClick={handleNavClick}
          >
            Conheca minha historia
          </a>
          <a
            className="rounded-full border border-white/40 px-3 py-1 transition-colors hover:border-brand-yellow hover:text-brand-yellow sm:border-transparent sm:px-0 sm:py-0"
            href="#manifesto"
            onClick={handleNavClick}
          >
            Leia o manifesto
          </a>
        </div>

        <div className="hidden items-center gap-2 sm:flex sm:gap-3 md:gap-4">
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://www.instagram.com/nattannoliveira/"
            aria-label="Instagram"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/icons/IconIntagram.png"
              alt="Instagram"
              className="h-4 w-4 sm:h-5 sm:w-5"
              loading="lazy"
            />
          </a>
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://www.facebook.com/natanoliveiravozes"
            aria-label="Facebook"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/icons/IconFacebook.svg"
              alt="Facebook"
              className="h-4 w-4 sm:h-5 sm:w-5"
              loading="lazy"
            />
          </a>
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://www.tiktok.com/@natan_oliveira12?_r=1&_t=ZS-96HMXCLQMh6"
            aria-label="TikTok"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/icons/tiktok.svg"
              alt="TikTok"
              className="h-4 w-4 sm:h-5 sm:w-5"
              loading="lazy"
            />
          </a>
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://youtube.com/@nattannoliveira?si=ZYn2Q06gA50pq2VH"
            aria-label="YouTube"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/icons/youtube.svg"
              alt="YouTube"
              className="h-4 w-4 sm:h-5 sm:w-5"
              loading="lazy"
            />
          </a>
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://wa.me/5537991242690"
            aria-label="WhatsApp"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              className="h-4 w-4 sm:h-5 sm:w-5"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
