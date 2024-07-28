"use client";
import { useUser } from "@/contexts/user";
import { cn } from "@/helpers/cn";

export default function Project() {
  const { getUser } = useUser();

  return (
    <main className="w-full p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
          Olá, {getUser()}! Aqui vou mostrar um pouco das minhas experiências
          profissionais!
        </p>
        <p className="my-3 text-sm sm:text-base lg:text-lg">
          Desde que entrei na área, sou um programador Full Stack, com mais
          experiência no ecossistema JavaScript/TypeScript. No entanto, estou
          sempre estudando as inovações do mercado de trabalho.
        </p>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 border rounded-lg mb-4">
        <p className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
          TDP - Sistemas de Informação
        </p>
        <span className="text-slate-400 font-extralight text-xs sm:text-sm lg:text-base leading-none block mb-2">
          Out de 2021 - o momento
        </span>
        <p className="text-sm sm:text-base lg:text-lg mb-2">
          Minha trajetória se inicia na empresa TDP, onde aprendi e ainda
          aprendo ao lado de pessoas incríveis. Também foi meu primeiro emprego.
        </p>
        <span className="text-xs sm:text-sm lg:text-base opacity-70 font-light text-justify block">
          A empresa tem como forma de negócio um produto ERP (Enterprise
          Resource Planning), com o objetivo de vender soluções para outras
          empresas. A TDP oferece um dashboard, delivery e até um PDV na nuvem,
          entre outras coisas.
        </span>
      </div>
    </main>
  );
}
