import Image from "next/image";

type NewsItem = {
  id: number;
  title: string;
  subtitle: string;
  source: string;
  logoSrc: string;
  logoAlt: string;
  href: string;
};

const news: NewsItem[] = [
  {
    id: 1,
    title:
      "Natan Oliveira Vozes é eleito vereador em Nova Serrana com proposta de renovação e voz popular",
    subtitle: "Perfil do Vereador Eleito Natan Oliveira Vozes ",
    source: "O Tempo",
    logoSrc: "/images/OTempo.jpg",
    logoAlt: "Logo O Tempo",
    href: "https://www.otempo.com.br/eleicoes/2024/candidatos/minas-gerais/nova-serrana/vereador/natan-oliveira-vozes-12000",
  },
  {
    id: 2,
    title: "Natan Oliveira projeta 2026",
    subtitle:
      "Natan Oliveira projeta 2026: Vereador de Nova Serrana revela planos e critica extremismo",
    source: "Portal Gerais",
    logoSrc: "/images/logoPortalGeral.png",
    logoAlt: "Logo Portal Gerais",
    href: "https://portalgerais.com/natan-oliveira-projeta-2026-vereador-de-nova-serrana-revela-planos-e-critica-extremismo/",
  },
];

export default function Noticias() {
  return (
    <section
      id="noticias"
      className="section min-h-[50vh] bg-neutral-gray pt-16 text-brand-blue"
    >
      <div className="section-inner flex flex-col items-center gap-8">
        <Image
          src="/images/noticiasTitle.png"
          alt="Veja algumas noticias sobre o nosso trabalho"
          width={640}
          height={120}
          className="h-auto w-full max-w-[480px]"
        />

        <div className="grid w-full gap-4 md:grid-cols-2">
          {news.map((item) => (
            <a
              key={item.id}
              className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-neutral-gray bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between gap-4">
                <Image
                  src={item.logoSrc}
                  alt={item.logoAlt}
                  width={140}
                  height={48}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-caption font-body text-brand-blue/70">
                  {item.source}
                </span>
              </div>

              <h3 className="text-subtitle font-heading font-semibold">
                {item.title}
              </h3>

              <p className="text-body font-body text-brand-blue/80">
                {item.subtitle}
              </p>

              <span className="text-caption font-body font-semibold text-brand-blue">
                Ler matéria
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
