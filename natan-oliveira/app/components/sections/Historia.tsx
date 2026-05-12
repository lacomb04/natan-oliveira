"use client";

import { useState } from "react";
import Image from "next/image";

export default function Historia() {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    <>
      Antes da politica, vieram os <strong>livros</strong>. Vieram as{" "}
      <strong>salas de aula</strong>, os sonhos divididos entre o trabalho, o
      estudo e a vontade de construir algo maior. De{" "}
      <strong>mudar vidas</strong>. De fazer diferente.
    </>,

    <>
      <strong>Elder Natan Pinto de Oliveira</strong> nasceu em{" "}
      <strong>Malacacheta</strong>, no Norte de Minas Gerais, em{" "}
      <strong>25 de dezembro de 1991</strong>. Ainda pequeno, chegou em{" "}
      <strong>Nova Serrana</strong> com a familia, como tantas outras pessoas
      que cruzaram estradas em busca de <strong>oportunidade</strong>, trabalho
      e uma vida mais digna.
    </>,

    <>
      A <strong>educacao publica</strong> mudou sua trajetoria. Formou-se em{" "}
      <strong>Letras pela Universidade Federal de Ouro Preto (UFOP)</strong>,
      onde iniciou sua caminhada nos <strong>movimentos estudantis</strong>,
      tornando-se uma importante <strong>lideranca universitaria</strong>. Foi
      ali que compreendeu que a <strong>transformacao social</strong> acontece
      quando as pessoas ocupam espacos e levantam suas vozes coletivamente.
      Tambem e{" "}
      <strong>
        mestre em Educacao pela Universidade do Estado de Minas Gerais (UEMG)
      </strong>
      .
    </>,

    <>
      Tornou-se <strong>professor de Lingua Portuguesa</strong> na educacao
      basica, servidor publico na{" "}
      <strong>Biblioteca Municipal Aurelio Camilo</strong>, em Nova Serrana, e
      hoje tambem atua como <strong>professor do ensino superior</strong>.{" "}
      <strong>Educador popular</strong> e ativista do{" "}
      <strong>Movimento Negro</strong>, e fundador do{" "}
      <strong>De(s)coloniza</strong>, projeto voltado a educacao antirracista, e
      do <strong>Movimento Vozes</strong>, iniciativa de democratizacao da
      politica e incentivo a participacao popular.
    </>,

    <>
      Entre <strong>livros</strong>, jovens, historias e sonhos, encontrou ainda
      mais motivos para acreditar na <strong>educacao</strong>, na{" "}
      <strong>cultura</strong> e na <strong>participacao coletiva</strong> como
      ferramentas reais de transformacao. A <strong>cultura urbana</strong>, os
      movimentos perifericos, a juventude e a vivencia popular ajudaram a
      fortalecer seu compromisso com a <strong>justica social</strong> e com uma
      politica mais humana e proxima das pessoas.
    </>,

    <>
      Em <strong>2024</strong>, foi eleito{" "}
      <strong>vereador em Nova Serrana</strong> com <strong>647 votos</strong>,
      construindo uma atuacao marcada pela <strong>escuta</strong>, presenca nos
      bairros e defesa da <strong>educacao</strong>, da <strong>cultura</strong>{" "}
      e da <strong>participacao popular</strong>. Uma politica feita para
      ampliar as vozes de quem ainda tem pouco espaco.
    </>,

    <>
      A relacao com a politica tambem atravessa sua{" "}
      <strong>historia familiar</strong>. Natan carrega o legado do avo,{" "}
      <strong>Claudino Pinto de Oliveira</strong>, vereador por dois mandatos em
      Malacacheta, numa epoca em que a politica ainda nao era remunerada. Herdou
      dele a sensibilidade para ouvir as pessoas simples e a vontade de lutar
      por quem mais precisa.
    </>,

    <>
      Hoje, e <strong>pre-candidato a deputado estadual</strong> pelo{" "}
      <strong>PDT</strong> em Minas Gerais, defendendo uma politica construida
      pelo <strong>dialogo</strong>, conectada com a vida real e com as
      transformacoes que nascem das periferias, das escolas e das comunidades.
    </>,

    <>
      Porque de onde a gente vem <strong>importa</strong>.
    </>,
  ];

  const visibleParagraphs = paragraphs.slice(0, 2);
  const hiddenParagraphs = paragraphs.slice(2);

  return (
    <section
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
            Minha historia comeca como a de muita gente.
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
            onClick={() => setIsExpanded((prev) => !prev)}
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
