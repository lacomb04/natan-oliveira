import Image from "next/image";

export default function Trajetoria() {
  const youtubeId = "";

  return (
    <section id="trajetoria" className="section min-h-[50vh] bg-brand-yellow">
      <div className="section-inner flex flex-col gap-6">
        <div className="flex w-full justify-center">
          <Image
            src="/images/MinhaTragetoria.png"
            alt="Conheca minha trajetoria"
            width={520}
            height={160}
            className="h-auto w-full max-w-[420px]"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <div className="w-full overflow-hidden rounded-[26px] border-[4px] border-brand-blue bg-neutral-gray">
            <div className="aspect-video w-full">
              {youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="Video da minha trajetoria"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-center">
                  <span className="text-body font-heading p-10 font-semibold uppercase text-brand-blue">
                    Em breve 12/05 - Video contando um pouco da minha trajetoria
                    e planos para o futuro
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
