"use client";

import * as React from "react";

const navLinks = [
  { id: "livro", label: "BAIXE O LIVRO" },
  { id: "historia", label: "CONHEÇA MINHA HISTÓRIA" },
  { id: "manifesto", label: "LEIA O MANIFESTO" },
  { id: "trajetoria", label: "MINHA TRAJETÓRIA" },
  { id: "redes-sociais", label: "REDES SOCIAIS" },
];

export default function HeroNav() {
  const [activeSection, setActiveSection] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavClick = (targetId: string) => {
    setActiveSection(targetId);
    setMenuOpen(false);
  };

  // Detect scroll position to update active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id);
      const scrollY = window.pageYOffset;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + element.offsetHeight;

        if (scrollY >= top - 100 && scrollY < bottom - 100) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavClass = (sectionId: string) => {
    if (activeSection === sectionId) {
      return "relative whitespace-nowrap text-[11px] xl:text-xs font-bold uppercase tracking-wide text-brand-blue after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-brand-red";
    }
    return "whitespace-nowrap text-[11px] xl:text-xs font-bold uppercase tracking-wide text-brand-blue hover:text-brand-yellow transition-colors";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center shrink-0">
          <img
            src="/images/logoNova.png"
            alt="Logo Natan Oliveira"
            className="h-10 md:h-14 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={getNavClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/nattannoliveira/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block rounded-full bg-brand-red px-4 py-2 xl:px-6 xl:py-3 text-xs xl:text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red/90 hover:shadow-lg"
          >
            FALE COM NATAN
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 h-10 w-10 rounded-md hover:bg-neutral-gray transition"
          >
            <span
              className={`block h-0.5 w-6 bg-brand-blue transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-blue transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-blue transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 bg-white border-t border-neutral-gray px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`${getNavClass(link.id)} text-center`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/nattannoliveira/"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red/90"
          >
            FALE COM NATAN
          </a>
        </nav>
      </div>
    </header>
  );
}
