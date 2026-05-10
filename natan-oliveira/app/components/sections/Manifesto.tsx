import Image from "next/image";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="section min-h-[50vh] bg-brand-blue text-neutral-white"
    >
      <div className="section-inner flex flex-col items-center gap-4 text-center">
        <Image
          src="/images/manifestoTitle.png"
          alt="Manifesto"
          width={520}
          height={160}
          className="h-auto w-full max-w-[420px]"
        />
        <p className="text-body max-w-3xl text-neutral-white/90 font-body [@media(max-height:500px)]:pb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna
          lectus, varius suscipit mattis eu, tincidunt vitae mauris. Duis
          vulputate ipsum orci, nec efficitur felis malesuada non. Etiam nibh
          dolor, suscipit et convallis in, scelerisque sit amet urna.
        </p>
      </div>
    </section>
  );
}
