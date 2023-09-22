import DevAnimation from "@/assets/animations/dev.json";
import AcceptTerms from "@/components/AcceptTerms";
import FooterSite from "@/components/FooterSite";
import HeaderSite from "@/components/HeaderSite";
import NewsLetter from "@/components/NewsLetter";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiOutlineCode } from "react-icons/ai";
import { BsFolderCheck } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";

export function About() {
  return (
    <>
      <HeaderSite />
      <div className="container p-4 flex flex-col">
        <div className=" py-16 items-center justify-center flex flex-col gap-4">
          <h2 className="text-2xl md:text-5xl text-center font-bold typewriter">
            Sobre o <span className="text-yellow-400">Dev</span>Challenge
          </h2>
          <p className="text-lg text-center text-yellow-400 font-bold">
            Um pouco sobre nós
          </p>
          <p className="text-white max-w-2xl mt-10 text-center">
            O{" "}
            <a
              href="https://discord.gg/yvYXhGj"
              target="_blank"
              rel="nofollow noreferer noopener"
            >
              <b>
                <span className="text-yellow-400">Dev</span>Challenge
              </b>
            </a>{" "}
            é mais do que apenas uma plataforma de programação. É uma comunidade
            vibrante de apaixonados por desenvolvimento de software, como você!
            Nossa missão é oferecer desafios de programação do mundo real que
            vão te transformar em um desenvolvedor excepcional.
          </p>
        </div>

        <div className="flex py-8 w-full flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold text-yellow-400 max-w-3xl">
            🤔 O que nos torna diferentes?
          </h3>
          <p className="text-white max-w-2xl text-center">
            Ainda não te convencemos, da uma olhada nos diferenciais então.
          </p>
        </div>
        <div className="py-16 w-full items-center justify-center flex">
          <div className="max-w-6xl items-center justify-center grid xs:grid-rows-4 md:grid-cols-4 gap-4">
            <div className="cursor-pointer w-full md:h-[450px] lg:h-[350px] p-4 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-start">
              <SlScreenDesktop className="w-12 h-12 text-yellow-400" />
              <p className="font-bold text-center">Projetos de Qualidade</p>
              <p className="text-white text-center">
                Aqui, você encontrará projetos reais e bem documentados para
                praticar e aprimorar suas habilidades. Queremos que você
                trabalhe em projetos que realmente importam.
              </p>
            </div>
            <div className="cursor-pointer w-full md:h-[450px] lg:h-[350px] p-4 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-start">
              <FaDiscord className="w-12 h-12 text-yellow-400" />
              <p className="font-bold text-center">Comunidade Engajada</p>
              <p className="text-white text-center">
                Junte-se a uma comunidade de desenvolvedores apaixonados que
                compartilham recursos, práticas e desafios. Aprenda uns com os
                outros e cresça como desenvolvedor.
              </p>
            </div>
            <div className="cursor-pointer w-full md:h-[450px] lg:h-[350px] p-4 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-start">
              <AiOutlineCode className="w-12 h-12 text-yellow-400" />
              <p className="font-bold text-center">Desafios Personalizados</p>
              <p className="text-white text-center">
                No DevChallenge, acreditamos que a melhor maneira de aprender é
                se desafiando. Oferecemos desafios variados para que você possa
                escolher aqueles que correspondem aos seus objetivos de
                aprendizado.
              </p>
            </div>
            <div className="cursor-pointer w-full md:h-[450px] lg:h-[350px] p-4 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-start">
              <BsFolderCheck className="w-12 h-12 text-yellow-400" />
              <p className="font-bold text-center">Construa Seu Portfólio</p>
              <p className="text-white text-center">
                Trabalhar em projetos do mundo real significa que você está
                construindo um portfólio sólido que chamará a atenção de
                potenciais empregadores. Ingresse na carreira de desenvolvimento
                com confiança.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Player
            autoplay={true}
            controls={false}
            loop={true}
            src={DevAnimation}
            style={{ height: "300px", width: "300px" }}
          />
          <div className="flex flex-col max-w-md gap-6">
            <p className="text-white">
              Não espere mais! Junte-se ao{" "}
              <a
                href="https://discord.gg/yvYXhGj"
                target="_blank"
                rel="nofollow noreferer noopener"
              >
                <b>
                  <span className="text-yellow-400">Dev</span>Challenge
                </b>
              </a>{" "}
              hoje e embarque em uma jornada emocionante para se tornar um
              engenheiro de software de elite. Desafie-se, aprenda, e construa
              um futuro brilhante na área de desenvolvimento de software.
              Estamos aqui para te apoiar a cada passo do caminho.😀
            </p>

            <a
              href="https://discord.gg/yvYXhGj"
              target="_blank"
              rel="nofollow noreferer noopener"
              className={`flex flex-row items-center justify-center text-sm font-medium bg-yellow-400 transition-colors hover:bg-yellow-600 animate-pulse text-black px-6 py-2 rounded-full`}
            >
              <FaDiscord className="w-4 h-4 text-black mr-2" />
              Entre na comunidade
            </a>
          </div>
        </div>

        <div className="flex py-16 flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className="text-4xl font-bold text-yellow-400">Nossa equipe</h3>
            <p className="text-white">
              Equipe de Devs dedicados, com expriência no mercado e que trazem
              sua bagagem e experiências para ajudar outros devs a estarem
              sempre em busca do próximo nível na sua profissão, stack,
              linguagem ou estudos, por meio de desafios tecnicos e que
              realmente tragam aprendizados para quem participa. Aqui estão
              apenas alguns dos colaboradores do projeto.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-4 w-full max-w-md">
            <a href="https://github.com/Lorenalgm" target="_blank">
              <img
                src="https://github.com/Lorenalgm.png"
                alt="Lorenalgm"
                className="w-24 h-24 rounded-full object-cover"
              />
            </a>
            <a href="https://github.com/filipeleonelbatista" target="_blank">
              <img
                src="https://github.com/filipeleonelbatista.png"
                alt="filipeleonelbatista"
                className="w-24 h-24 rounded-full object-cover"
              />
            </a>
            <a href="https://github.com/Lucas0019" target="_blank">
              <img
                src="https://github.com/Lucas0019.png"
                alt="Lucas0019"
                className="w-24 h-24 rounded-full object-cover"
              />
            </a>
          </div>
        </div>

        <NewsLetter />
      </div>
      <FooterSite />
      <AcceptTerms />
    </>
  );
}
