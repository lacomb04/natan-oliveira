"use client";

import { useState } from "react";
import Image from "next/image";

export default function Manifesto() {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    "Minas Gerais é feita de muitas Minas. Da cozinha simples do interior à força pulsante das periferias. Do som que nasce nas ruas às vozes que ecoam nos vales, nas quebradas, nas escolas, nos becos, nas ocupações e nas praças. Minas é diversidade. Minas é luta. Minas é gente. Gente que hoje se levanta, se organiza e exige que essas vozes sejam ouvidas. Gente que não aceita mais que a política seja feita sem diálogo, sem gente, sem voz. Gente que está cansada de ver os mesmos rostos ocupando espaços de poder, enquanto quem conhece a realidade de verdade continua do lado de fora.",
    "Porque as respostas que Minas precisa não estão escondidas em gabinetes. Elas estão nas ruas. Nas periferias. Nos interiores. Na voz da trabalhadora que pega ônibus lotado antes do amanhecer. Na juventude que transforma dor em arte. Na mãe que luta pela educação do filho. No estudante que sonha em entrar na universidade. No professor que resiste mesmo diante do abandono. No artista de rua que insiste em existir mesmo quando tentam apagar sua voz.",
    "É dessas pessoas que nasce esse projeto político. Um projeto que entende que política não pode ser privilégio. Precisa ser ferramenta de transformação. Nós sabemos o que é escassez. Sabemos o que é ausência. Sabemos o que é crescer ouvindo “não”. Sabemos o que é ser interrompido antes mesmo de começar. E talvez por isso exista tanta força na nossa caminhada. Como nos ensinou Milton Santos: “a experiência da escassez é a descoberta do que a gente realmente vale”. E quem vem de baixo aprende cedo a transformar sobrevivência em coragem.",
    "É por isso que nossa luta não é abstrata. Nossa luta sabe que o lugar de onde viemos importa. Por isso, ela tem rosto, tem sotaque, tem território, tem cheiro, tem sabor, tem memória. Lutamos por um estado que chegue onde nunca chegou. Que garanta dignidade ao povo mineiro. Que trate saúde pública como prioridade e não como favor. Que compreenda moradia, saneamento, transporte e qualidade de vida como direitos básicos. Que olhe para as periferias e para os interiores não como problema, mas como potência.",
    "E existe uma luta que atravessa todas as outras: a educação. Porque educação muda destino. Educação abre portas. Educação salva. Mas em Minas Gerais tentam transformar a educação em mercadoria. Sucateiam escolas, desrespeitam servidores, privatizam sonhos. Fazendo lembrar a máxima de Darcy Ribeiro que dizia: “a crise da educação no Brasil não é uma crise. É um projeto.” Nossa luta se recusa a aceitar esse projeto. Defendemos uma educação pública, humana, cidadã, transformadora. Uma educação que alcance crianças, adolescentes, jovens, adultos e idosos. Uma educação que forme pessoas livres.",
    "Também defendemos a cultura como direito. Porque a cultura salva vidas todos os dias. A cultura urbana, a cultura da periferia, a cultura do interior. O hip-hop, o grafite, a dança, a música, a poesia de rua não são apenas manifestações artísticas. São resistência. São identidade. São caminhos possíveis para milhares de jovens que cresceram ouvindo que nunca chegariam a lugar nenhum.",
    "Nós acreditamos na potência da juventude periférica. Acreditamos na força de quem cria mesmo sem incentivo. Na coragem de quem transforma exclusão em expressão. E acreditamos que nenhuma democracia será completa enquanto pessoas continuarem sendo silenciadas por serem diferentes. Falamos aqui da luta antirracista. Da luta das mulheres. Da população LGBTQIAPN+. Das pessoas com deficiência. Das pessoas neurodivergentes. De todos que conhecem na pele o peso do preconceito e da exclusão.",
    "Defender dignidade humana não é pauta secundária. É o centro de qualquer projeto de justiça social. Porque ninguém se salva sozinho. Não existe transformação sem coletivo. Não existe futuro sem união. Não existe esperança sem coragem.",
    "Esse projeto nasce da nossa origem. Da nossa história. Do nosso povo, de casa em casa, de cada canto do estado. De cada conversa ao pé do fogão à lenha, de cada roçado. Nasce daquilo que vivemos. Daquilo que somos. E é exatamente por isso que essa caminhada faz sentido. Porque de onde a gente vem molda aquilo que a gente defende. Molda aquilo que a gente sonha. Molda aquilo que a gente nunca aceita esquecer.",
    "E é por isso que Natan Oliveira é pré-candidato a deputado estadual. Para fazer ecoar a voz do nosso povo. Para transformar nosso sonho em realidade! Porque de onde a gente vem importa!",
  ];

  const visibleParagraphs = paragraphs.slice(0, 2);
  const hiddenParagraphs = paragraphs.slice(2);

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
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-2 inline-flex items-center justify-center rounded-full border border-neutral-white/60 px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-neutral-white hover:text-neutral-white"
          aria-expanded={isExpanded}
          aria-controls="manifesto-more"
        >
          {isExpanded ? "Ler menos" : "Ler mais"}
        </button>
      </div>
    </section>
  );
}
