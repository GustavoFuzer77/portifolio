"use client";

import { ButtonComponent } from "@/components/Button";
import { useActiveCursorEffectOnPage } from "@/utils/cursorEffects";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme";
import Link from "next/link";
import { useUser } from "@/contexts/user";

export default function Home() {
  useActiveCursorEffectOnPage();
  const { getUser } = useUser();

  return (
    <div className="w-full text-justify">
      <p className="indent-4 mb-2">
        Sou um <span className="font-bold">desenvolvedor Full Stack </span>
        apaixonado por tecnologia e inovação. Com experiência em React, Next.js
        e Node.js, tenho conhecimento em várias bibliotecas e frameworks como
        Redux, Express e NestJS. Minha curiosidade pela tecnologia e sede de
        conhecimento me impulsionam a aprender continuamente e aprimorar minhas
        habilidades.
      </p>
      <p className="relative line">
        <span className="font-semibold">
          Valorizo a criação de soluções intuitivas e eficientes
        </span>
        , aplicando padrões de projeto e design que ajudam nessa missão. Meu
        objetivo é sempre entregar um trabalho de alta qualidade, facilitando a
        vida dos usuários e colaborando efetivamente com a equipe de
        desenvolvimento.
      </p>

      <p className="mt-8">
        Quando estou tranquilo e não estou trabalhando, gosto de ler e passar
        meu tempo com meus{" "}
        <span className="font-bold !text-transparent !bg-clip-text !bg-gradient-to-r !from-amber-400 !to-slate-600">
          gatos
        </span>
        🐈🐈‍⬛. E é claro que não pode faltar o bom e velho{" "}
        <span className="glitch">video-game</span>!
      </p>

      <p className="mt-8">
        Sou formado em tecnólogo em{" "}
        <span className="font-semibold">Sistemas para Internet </span>
        pela FATEC de Jahu. O Curso teve duração de 3 anos.
      </p>

      <p className="mt-8">Atualmente estou estudando Golang e Java.</p>

      <div className="flex flex-1 justify-center items-center w-full flex-col pb-4">
        <p className="py-2 text-sm">Gostou? Que tal trocarmos uma ideia?</p>
        <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-600 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          <Link
            className="text-zinc-800"
            target="_blank"
            href={`https://wa.me/14991163763?text=Ol%C3%A1,%20Gustavo!%20meu%20nome%20%C3%A9%20${getUser()}.%20Estou%20entrando%20em%20contato%20para%20trocarmos%20uma%20ideia%20:D%22.`}
          >
            Me mande mensagem!
          </Link>
        </button>
      </div>
    </div>
  );
}
