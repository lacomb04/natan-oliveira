import Image from "next/image";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nattannoliveira/",
    icon: "/icons/IconIntagram.png",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/natanoliveiravozes",
    icon: "/icons/IconFacebook.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5537991242690",
    icon: "/icons/whatsapp.png",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@nattannoliveira?si=ZYn2Q06gA50pq2VH",
    icon: "/icons/youtube.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@natan_oliveira12?_r=1&_t=ZS-96HMXCLQMh6",
    icon: "/icons/tiktok.svg",
  },
];

export default function Footer() {
  return (
    <footer className="section bg-brand-blue text-neutral-white">
      <div className="section-inner flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Image
            src="/images/Logos diferente cores-04.png"
            alt="Logo Natan Oliveira"
            width={240}
            height={160}
            className="h-auto w-[200px] md:w-[220px]"
          />
          <p className="text-caption text-neutral-white/85 font-body">
            Cidade Nova Serrana, MG
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-right">
          <p className="text-subtitle font-semibold uppercase tracking-wide font-heading">
            Redes sociais e contato
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center gap-2 rounded-full border border-neutral-white/20 px-3 py-2 text-caption font-semibold text-neutral-white transition hover:bg-neutral-white/10"
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
