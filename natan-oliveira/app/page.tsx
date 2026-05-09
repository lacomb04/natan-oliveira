import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-white">
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="mb-4 text-brand-blue">Conteudo abaixo do banner</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-blue/80 md:text-lg">
          Essa area ja fica preparada para voce adicionar apresentacao,
          servicos, projetos ou qualquer outro bloco de conteudo abaixo da foto
          principal.
        </p>
      </section>
    </main>
  );
}
