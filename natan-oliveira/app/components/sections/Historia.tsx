"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Historia() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggleExpand = () => {
    if (isExpanded && sectionRef.current) {
      // Se vai fechar, faz scroll para o topo da seção
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
    setIsExpanded((prev) => !prev);
  };

  const paragraphs = [
    <>
      Antes da política, vieram os <strong>livros</strong>. Vieram as{" "}
      <strong>salas de aula</strong>, os sonhos divididos entre o trabalho, o
      estudo e a vontade de construir algo maior. De{" "}
      <strong>mudar vidas</strong>. De fazer diferente.
    </>,

    <>
      <strong>Elder Natan Pinto de Oliveira</strong> nasceu em{" "}
      <strong>Malacacheta</strong>, no Norte de Minas Gerais, em{" "}
      <strong>25 de dezembro de 1991</strong>. Ainda pequeno, chegou em{" "}
      <strong>Nova Serrana</strong> com a família, como tantas outras pessoas
      que cruzaram estradas em busca de <strong>oportunidade</strong>, trabalho
      e uma vida mais digna.
    </>,

    <>
      A <strong>educação pública</strong> mudou sua trajetória. Formou-se em{" "}
      <strong>Letras pela Universidade Federal de Ouro Preto (UFOP)</strong>,
      onde iniciou sua caminhada nos <strong>movimentos estudantis</strong>,
      tornando-se uma importante <strong>liderança universitária</strong>. Foi
      ali que compreendeu que a <strong>transformação social</strong> acontece
      quando as pessoas ocupam espaços e levantam suas vozes coletivamente.
      Também é{" "}
      <strong>
        mestre em Educação pela Universidade do Estado de Minas Gerais (UEMG)
      </strong>
      .
    </>,

    <>
      Tornou-se <strong>professor de Língua Portuguesa</strong> na educação
      básica, servidor público na{" "}
      <strong>Biblioteca Municipal Aurélio Camilo</strong>, em Nova Serrana, e
      hoje também atua como <strong>professor do ensino superior</strong>.{" "}
      <strong>Educador popular</strong> e ativista do{" "}
      <strong>Movimento Negro</strong>, é fundador do{" "}
      <strong>De(s)coloniza</strong>, projeto voltado à educação antirracista, e
      do <strong>Movimento Vozes</strong>, iniciativa de democratização da
      política e incentivo à participação popular.
    </>,

    <>
      Entre <strong>livros</strong>, jovens, histórias e sonhos, encontrou ainda
      mais motivos para acreditar na <strong>educação</strong>, na{" "}
      <strong>cultura</strong> e na <strong>participação coletiva</strong> como
      ferramentas reais de <strong>transformação</strong>. A{" "}
      <strong>cultura urbana</strong>, os movimentos{" "}
      <strong>periféricos</strong>, a juventude e a{" "}
      <strong>vivência popular</strong> ajudaram a fortalecer seu compromisso
      com a <strong>justiça social</strong> e com uma{" "}
      <strong>política mais humana e próxima das pessoas</strong>.
    </>,

    <>
      Em <strong>2024</strong>, foi eleito{" "}
      <strong>vereador em Nova Serrana</strong> com <strong>647 votos</strong>,
      construindo uma <strong>atuação marcada pela escuta</strong>, presença nos
      bairros e defesa da <strong>educação</strong>, da <strong>cultura</strong>{" "}
      e da <strong>participação popular</strong>. Uma política feita para
      ampliar as vozes de quem ainda tem pouco <strong>espaço</strong>.
    </>,

    <>
      A <strong>relação com a política</strong> também atravessa sua{" "}
      <strong>história familiar</strong>. Natan carrega o legado do{" "}
      <strong>avô</strong>, <strong>Claudino Pinto de Oliveira</strong>,
      vereador por dois mandatos em Malacacheta, numa <strong>época</strong> em
      que a política ainda não era remunerada. Herdou dele a sensibilidade para
      ouvir as pessoas simples e a vontade de lutar por quem mais precisa.
    </>,

    <>
      Hoje, é <strong>pré-candidato a deputado estadual</strong> pelo{" "}
      <strong>PDT</strong> em Minas Gerais, defendendo uma{" "}
      <strong>política construída pelo diálogo</strong>, conectada com a vida
      real e com as <strong>transformações</strong> que nascem das periferias,
      das escolas e das comunidades.
    </>,

    <>
      Porque de onde a gente vem <strong>importa</strong>.
    </>,
  ];

  const visibleParagraphs = paragraphs.slice(0, 2);
  const hiddenParagraphs = paragraphs.slice(2);

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="section min-h-[50vh] bg-brand-blue text-neutral-white"
    >
      <div className="section-inner flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4 text-left">
          <Image
            src="/images/conhecaMinhaHistoriaTitle.png"
            alt="Conheca minha historia"
            width={640}
            height={50}
            className="h-auto w-full max-w-[520px]"
          />

          <h2 className="text-subtitle font-semibold font-heading">
            Minha história começa como a de muita gente.
          </h2>

          <div className="text-body text-neutral-white/90 font-body">
            {visibleParagraphs.map((paragraph, index) => (
              <p key={`historia-visible-${index}`} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}

            <div
              id="historia-more"
              className={
                "overflow-hidden transition-[max-height,opacity] duration-500 ease-out " +
                (isExpanded
                  ? "max-h-[1800px] opacity-100"
                  : "max-h-0 opacity-0")
              }
              aria-hidden={!isExpanded}
            >
              {hiddenParagraphs.map((paragraph, index) => (
                <p key={`historia-hidden-${index}`} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggleExpand}
            className="mt-2 mb-4 inline-flex items-center justify-center rounded-full border border-neutral-white/60 px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-neutral-white hover:text-neutral-white"
            aria-expanded={isExpanded}
            aria-controls="historia-more"
          >
            {isExpanded ? "Ler menos" : "Ler mais"}
          </button>
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
