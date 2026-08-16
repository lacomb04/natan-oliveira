"use client";

import { useState } from "react";
import Image from "next/image";

type SocialPost = {
  id: number;
  title: string;
  embedUrl?: string;
};

const posts: SocialPost[] = [
  {
    id: 1,
    title: "Postagem Instagram",
    embedUrl: "https://www.instagram.com/p/DYDn41Ikdq8/embed",
  },
  {
    id: 2,
    title: "Postagem Instagram",
    embedUrl: "https://www.instagram.com/p/DW9ETyakfab/embed",
  },
  {
    id: 3,
    title: "Postagem Instagram",
    embedUrl: "https://www.instagram.com/p/DYHfQXIEXuS/embed",
  },
];

function InstagramEmbed({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="h-[520px] w-full overflow-hidden rounded-xl bg-neutral-gray">
        <iframe
          className="h-full w-full"
          src={url}
          title="Postagem Instagram"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
          style={{ overflow: "hidden" }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-[520px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 transition hover:from-brand-blue/10 hover:to-brand-blue/20"
      aria-label="Carregar postagem do Instagram"
    >
      <div className="flex flex-col items-center gap-3">
        <svg
          className="h-12 w-12 text-brand-blue/50 transition group-hover:scale-110 group-hover:text-brand-blue"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        <span className="text-sm font-semibold text-brand-blue/50 transition group-hover:text-brand-blue">
          Clique para carregar
        </span>
      </div>
    </button>
  );
}

export default function RedesSociais() {
  return (
    <section
      id="redes-sociais"
      className="section min-h-[50vh] bg-neutral-white pt-20 text-brand-blue md:pt-20"
    >
      <div className="section-inner flex flex-col items-center gap-6 [@media(max-height:500px)]:pt-20">
        <h2 className="text-title font-extrabold uppercase tracking-wide text-brand-blue font-heading">
          Redes Sociais
        </h2>

        <div className="grid w-full gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-gray bg-white p-4 shadow-sm"
            >
              {post.embedUrl ? (
                <InstagramEmbed url={post.embedUrl} />
              ) : (
                <div className="flex h-[520px] w-full items-center justify-center rounded-xl bg-neutral-gray text-brand-blue/40">
                  <span className="text-caption font-body">
                    Embed do post
                  </span>
                </div>
              )}

              <p className="text-caption font-semibold font-body">
                {post.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
