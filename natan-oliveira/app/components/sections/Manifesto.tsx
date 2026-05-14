"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Manifesto() {
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
      <strong>Minas Gerais</strong> é feita de muitas Minas. Da cozinha simples
      do interior à força pulsante das <strong>periferias</strong>. Do som que
      nasce nas ruas às vozes que ecoam nos vales, nas quebradas, nas escolas,
      nos becos, nas ocupações e nas praças. Minas é{" "}
      <strong>diversidade</strong>. Minas é <strong>luta</strong>. Minas é{" "}
      <strong>gente</strong>. Gente que hoje se levanta, se organiza e exige que
      essas vozes sejam ouvidas. Gente que não aceita mais que a{" "}
      <strong>política</strong> seja feita sem diálogo, sem gente, sem voz.
      Gente que está cansada de ver os mesmos rostos ocupando espaços de poder,
      enquanto quem conhece a realidade de verdade continua do lado de fora.
    </>,

    <>
      Porque as respostas que Minas precisa não estão escondidas em{" "}
      <strong>gabinetes</strong>. Elas estão nas ruas. Nas{" "}
      <strong>periferias</strong>. Nos interiores. Na voz da trabalhadora que
      pega ônibus lotado antes do amanhecer. Na juventude que transforma dor em{" "}
      <strong>arte</strong>. Na mãe que luta pela <strong>educação</strong> do
      filho. No estudante que sonha em entrar na <strong>universidade</strong>.
      No professor que resiste mesmo diante do abandono. No artista de rua que
      insiste em existir mesmo quando tentam apagar sua voz.
    </>,

    <>
      É dessas pessoas que nasce esse <strong>projeto político</strong>. Um
      projeto que entende que política não pode ser privilégio. Precisa ser{" "}
      <strong>ferramenta de transformação</strong>. Nós sabemos o que é{" "}
      <strong>escassez</strong>. Sabemos o que é ausência. Sabemos o que é
      crescer ouvindo “não”. Sabemos o que é ser interrompido antes mesmo de
      começar. E talvez por isso exista tanta força na nossa caminhada. Como nos
      ensinou <strong>Milton Santos</strong>: “a experiência da escassez é a
      descoberta do que a gente realmente vale”. E quem vem de baixo aprende
      cedo a transformar sobrevivência em coragem.
    </>,

    <>
      É por isso que nossa luta não é abstrata. Nossa luta sabe que o lugar de
      onde viemos importa. Por isso, ela tem rosto, tem sotaque, tem território,
      tem cheiro, tem sabor, tem memória. Lutamos por um estado que chegue onde
      nunca chegou. Que garanta <strong>dignidade</strong> ao povo mineiro. Que
      trate <strong>saúde pública</strong> como prioridade e não como favor. Que
      compreenda moradia, saneamento, transporte e qualidade de vida como{" "}
      <strong>direitos básicos</strong>. Que olhe para as periferias e para os
      interiores não como problema, mas como <strong>potência</strong>.
    </>,

    <>
      E existe uma luta que atravessa todas as outras: a{" "}
      <strong>educação</strong>. Porque educação muda destino. Educação abre
      portas. Educação salva. Mas em Minas Gerais tentam transformar a educação
      em mercadoria. Sucateiam escolas, desrespeitam servidores, privatizam
      sonhos.
    </>,

    <>
      Fazendo lembrar a máxima de <strong>Darcy Ribeiro</strong> que dizia: “a
      crise da educação no Brasil não é uma crise. É um projeto.” Nossa luta se
      recusa a aceitar esse projeto. Defendemos uma{" "}
      <strong>educação pública</strong>, humana, cidadã, transformadora. Uma
      educação que alcance crianças, adolescentes, jovens, adultos e idosos. Uma
      educação que forme <strong>pessoas livres</strong>.
    </>,

    <>
      Também defendemos a <strong>cultura</strong> como direito. Porque a
      cultura salva vidas todos os dias. A cultura urbana, a cultura da
      periferia, a cultura do interior. O <strong>hip-hop</strong>, o{" "}
      <strong>grafite</strong>, a dança, a música, a poesia de rua não são
      apenas manifestações artísticas. São <strong>resistência</strong>. São{" "}
      <strong>identidade</strong>. São caminhos possíveis para milhares de
      jovens que cresceram ouvindo que nunca chegariam a lugar nenhum.
    </>,

    <>
      Nós acreditamos na potência da <strong>juventude periférica</strong>.
      Acreditamos na força de quem cria mesmo sem incentivo. Na coragem de quem
      transforma exclusão em expressão.
    </>,

    <>
      E acreditamos que nenhuma democracia será completa enquanto pessoas
      continuarem sendo silenciadas por serem diferentes. Falamos aqui da{" "}
      <strong>luta antirracista</strong>. Da luta das <strong>mulheres</strong>.
      Da população <strong>LGBTQIAPN+</strong>. Das pessoas com deficiência. Das
      pessoas neurodivergentes. De todos que conhecem na pele o peso do
      preconceito e da exclusão.
    </>,

    <>
      Defender <strong>dignidade humana</strong> não é pauta secundária. É o
      centro de qualquer projeto de <strong>justiça social</strong>. Porque
      ninguém se salva sozinho. Não existe transformação sem coletivo. Não
      existe futuro sem união. Não existe esperança sem coragem.
    </>,

    <>
      Esse projeto nasce da nossa <strong>origem</strong>. Da nossa história. Do
      nosso povo, de casa em casa, de cada canto do estado. De cada conversa ao
      pé do fogão à lenha, de cada roçado. Nasce daquilo que vivemos. Daquilo
      que somos. E é exatamente por isso que essa caminhada faz sentido.
    </>,

    <>
      Porque de onde a gente vem molda aquilo que a gente defende. Molda aquilo
      que a gente sonha. Molda aquilo que a gente nunca aceita esquecer.
    </>,

    <>
      E é por isso que <strong>Natan Oliveira</strong> é{" "}
      <strong>pré-candidato a deputado estadual</strong>. Para fazer ecoar a voz
      do nosso povo. Para transformar nosso sonho em realidade!
    </>,

    <>
      Porque de onde a gente vem <strong>importa</strong>!
    </>,
  ];

  const visibleParagraphs = paragraphs.slice(0, 2);
  const hiddenParagraphs = paragraphs.slice(2);

  return (
    <section
      ref={sectionRef}
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

        <div className="text-body max-w-3xl text-left text-neutral-white/90 font-body [@media(max-height:500px)]:pb-20">
          {visibleParagraphs.map((paragraph, index) => (
            <p key={`manifesto-visible-${index}`} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}

          <div
            id="manifesto-more"
            className={
              "overflow-hidden transition-[max-height,opacity] duration-500 ease-out " +
              (isExpanded ? "max-h-[2200px] opacity-100" : "max-h-0 opacity-0")
            }
            aria-hidden={!isExpanded}
          >
            {hiddenParagraphs.map((paragraph, index) => (
              <p key={`manifesto-hidden-${index}`} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleExpand}
          className="mt-2 mb-8 inline-flex items-center justify-center rounded-full border border-neutral-white/60 px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-neutral-white hover:text-neutral-white"
          aria-expanded={isExpanded}
          aria-controls="manifesto-more"
        >
          {isExpanded ? "Ler menos" : "Ler mais"}
        </button>
      </div>
    </section>
  );
}
