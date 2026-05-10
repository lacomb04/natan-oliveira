import Image from "next/image";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="min-h-screen bg-brand-blue text-neutral-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center md:px-6 md:py-16">
        <Image
          src="/images/manifestoTitle.png"
          alt="Manifesto"
          width={520}
          height={160}
          className="h-auto w-full max-w-[420px]"
        />
        <p
          className="max-w-3xl text-[clamp(14px,2.3vw,16px)] leading-relaxed text-neutral-white/90"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna
          lectus, varius suscipit mattis eu, tincidunt vitae mauris. Duis
          vulputate ipsum orci, nec efficitur felis malesuada non. Etiam nibh
          dolor, suscipit et convallis in, scelerisque sit amet urna.
        </p>
      </div>
    </section>
  );
}
