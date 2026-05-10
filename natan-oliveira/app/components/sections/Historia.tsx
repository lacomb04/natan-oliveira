import Image from "next/image";

export default function Historia() {
  return (
    <section
      id="historia"
      className="section min-h-[50vh] bg-brand-blue text-neutral-white"
    >
      <div className="section-inner flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4 text-center">
          <Image
            src="/images/conhecaMinhaHistoriaTitle.png"
            alt="Conheca minha historia"
            width={640}
            height={50}
            className="h-auto w-full max-w-[520px]"
          />

          <h2 className="text-subtitle font-semibold font-heading">
            Minha historia comeca como a de muita gente.
          </h2>

          <p className="text-body text-neutral-white/90 font-body">
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
