import Image from "next/image";

export default function Livro() {
  return (
    <section id="livro" className="section min-h-[50vh] bg-neutral-white text-brand-blue">
      <div className="section-inner flex flex-col items-center gap-6 md:gap-8 text-center">
        <h2 className="text-title font-extrabold uppercase tracking-wide font-heading">
          Livro Origem Importa
        </h2>
        <p className="text-body max-w-2xl font-body text-brand-blue/80">
          Baixe o Livro de origem e conheça nossos 5 compromissos de campanha com Minas Gerais.
        </p>

        <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-neutral-gray bg-white p-8 shadow-lg">
          <Image
            src="/images/CapaLivroOrigem.png"
            alt="Capa do Livro Origem"
            width={400}
            height={568}
            priority
            className="max-w-[200px] rounded-md shadow-md"
          />
          <a
            href="/Livro%20Origem%20Importa.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-neutral-white shadow-lg transition duration-300 ease-in-out hover:bg-brand-blue-dark hover:shadow-xl"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar PDF
          </a>
        </div>
      </div>
    </section>
  );
}