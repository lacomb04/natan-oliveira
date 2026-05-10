import Image from "next/image";

export default function Trajetoria() {
  const youtubeId = "69RdQFDuYPI";

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
          <div className="w-full overflow-hidden rounded-[26px] border-[4px] border-brand-blue bg-neutral-white">
            <div className="aspect-video w-full">
              {!youtubeId ? (
                <div className="flex h-full w-full items-center justify-center text-brand-blue/40">
                  <div className="h-16 w-24 rounded-[18px] bg-brand-blue/10" />
                </div>
              ) : (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="Video da minha trajetoria"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          <p className="text-body font-semibold text-brand-blue font-heading">
            Video da minha trajetoria
          </p>
        </div>
      </div>
    </section>
  );
}
