import Image from "next/image";

type SocialPost = {
  id: number;
  title: string;
  embedUrl?: string;
};

const posts: SocialPost[] = [
  { id: 1, title: "Postagem 1" },
  { id: 2, title: "Postagem 2" },
  { id: 3, title: "Postagem 3" },
];

export default function RedesSociais() {
  return (
    <section
      id="redes-sociais"
      className="min-h-screen bg-neutral-white text-brand-blue"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-12 md:px-6 md:py-16">
        <Image
          src="/images/RedesSociaisTitle.png"
          alt="Minhas redes sociais"
          width={520}
          height={160}
          className="h-auto w-full max-w-[420px]"
        />

        <div className="grid w-full gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-gray bg-white p-4 shadow-sm"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-gray">
                {post.embedUrl ? (
                  <iframe
                    className="h-full w-full"
                    src={post.embedUrl}
                    title={post.title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-brand-blue/40">
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      Embed do post
                    </span>
                  </div>
                )}
              </div>

              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {post.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
