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

export default function RedesSociais() {
  return (
    <section
      id="redes-sociais"
      className="section min-h-[50vh] bg-neutral-white pt-20 text-brand-blue md:pt-20"
    >
      <div className="section-inner flex flex-col items-center gap-6 [@media(max-height:500px)]:pt-20">
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
              <div className="h-[600px] w-full overflow-hidden rounded-xl bg-neutral-gray">
                {post.embedUrl ? (
                  <iframe
                    className="h-full w-full"
                    src={post.embedUrl}
                    title={post.title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                    style={{ overflow: "hidden" }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-brand-blue/40">
                    <span className="text-caption font-body">
                      Embed do post
                    </span>
                  </div>
                )}
              </div>

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
