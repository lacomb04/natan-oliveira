"use client";

import { useState } from "react";
import Image from "next/image";

export default function Trajetoria() {
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const videoId = "IwXVhl_yWGQ";

  return (
    <section id="trajetoria" className="section min-h-[50vh] bg-brand-yellow">
      <div className="section-inner flex flex-col gap-6">
        <div className="flex w-full justify-center">
          <Image
            src="/images/MinhaTragetoria.webp"
            alt="Conheca minha trajetoria"
            width={520}
            height={160}
            className="h-auto w-full max-w-[420px]"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <div className="group relative w-full overflow-hidden rounded-[26px] border-[4px] border-brand-blue bg-black">
            <div className="aspect-video w-full">
              {playerLoaded ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="Video da minha trajetoria"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayerLoaded(true)}
                  className="relative h-full w-full cursor-pointer"
                  aria-label="Assistir vídeo da trajetória"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Thumbnail do vídeo"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow/90 shadow-lg transition group-hover:scale-110 group-hover:bg-brand-yellow md:h-20 md:w-20">
                      <svg
                        className="ml-1 h-8 w-8 text-brand-blue md:h-10 md:w-10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
