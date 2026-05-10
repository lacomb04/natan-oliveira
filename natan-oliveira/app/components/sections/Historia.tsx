import Image from "next/image";

export default function Historia() {
  return (
    <section
      id="historia"
      className="min-h-screen bg-brand-blue text-neutral-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 md:px-6 md:py-16 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4 text-center lg:items-center">
          <Image
            src="/images/conhecaMinhaHistoriaTitle.png"
            alt="Conheca minha historia"
            width={640}
            height={50}
            className="h-auto w-full max-w-[520px]"
          />

          <h2
            className="text-[clamp(18px,3vw,22px)] font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Minha historia comeca como a de muita gente.
          </h2>

          <p
            className="text-[clamp(14px,2.2vw,16px)] leading-relaxed text-neutral-white/90"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna
            lectus, varius suscipit mattis eu, tincidunt vitae mauris. Duis
            vulputate ipsum orci, nec efficitur felis malesuada non. Etiam nibh
            dolor, suscipit et convallis in, scelerisque sit amet urna.
          </p>
        </div>

        <div className="flex w-full justify-center lg:w-auto lg:justify-end">
          <Image
            src="/images/logoAmarelaSlogan.png"
            alt="Logo historia"
            width={220}
            height={220}
            className="h-auto w-[clamp(140px,24vw,220px)]"
          />
        </div>
      </div>
    </section>
  );
}
