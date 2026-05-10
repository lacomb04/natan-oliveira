export default function HeroNav() {
  return (
    <nav className="absolute left-1/2 top-10 z-40 w-[min(94vw,1100px)] -translate-x-1/2 text-white sm:top-20 md:top-5">
      <div
        className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between sm:text-left md:gap-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-5 text-[clamp(13px,1.6vw,14px)] font-semibold uppercase tracking-wide text-white   transition-all duration-300  sm:justify-start md:gap-20 lg:gap-50 md:text-[clamp(12px,1.5vw,15px)]">
          <a
            className="transition-colors hover:text-brand-yellow"
            href="#historia"
          >
            Conheca minha historia
          </a>
          <a
            className="transition-colors hover:text-brand-yellow"
            href="#manifesto"
          >
            Leia o manifesto
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://instagram.com"
            aria-label="Instagram"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn.simpleicons.org/instagram/ffffff"
              alt="Instagram"
              className="h-4 w-4 sm:h-5 sm:w-5"
              loading="lazy"
            />
          </a>
          <a
            className="rounded-full bg-white/10 p-2 transition hover:bg-brand-blue/90"
            href="https://tiktok.com"
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
            href="https://youtube.com"
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
            href="https://wa.me/"
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
