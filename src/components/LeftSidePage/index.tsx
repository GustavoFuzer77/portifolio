"use client";

import { activeCursorEffectOnPage } from "@/utils/cursorEffects";
import { ButtonComponent } from "../Button";
import ContainerComponent from "../Container";
import ToggleComponentTheme from "../toggle-theme-component";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme";
import { cn } from "@/helpers/cn";

export default function LeftSidePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  
  activeCursorEffectOnPage();

  return (
    <div id="main-div" className={cn("flex-1", `cursor-effect-${theme}`)}>
      <main className="h-svh flex items-center gap-16 justify-between max-w-7xl w-full m-auto">
        <section className="h-full py-16">
          <div className="flex gap-3 items-center">
            <ToggleComponentTheme />
            <p> - Change the day 💡</p>
          </div>
          <div className="my-8 flex flex-col">
            <div className="cursor-default">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                GUSTAVO FUZER
              </h1>
              <p className="indent-1.5 mt-3 text-sm font-medium tracking-widest text-slate-200 sm:text-xl">
                <span className="underline">Fullstack</span> Engineer
              </p>
            </div>
            <div className="pt-4 mb-8">
              <ButtonComponent border="dashed" theme={theme}>
                Baixe meu currículo
              </ButtonComponent>
            </div>
            <div>
              <div>
                <p className="italic">
                  "A journey of a thousand miles begins with a single step" -
                  Lao Tzu
                </p>
                <span className=""></span>
              </div>
              <ul className="py-16 space-y-3 ">
                <li>About me</li>
                <li>Projects</li>
                <li>Experiences</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex h-full py-16">
          <ContainerComponent>{children}</ContainerComponent>
        </section>
      </main>
    </div>
  );
}
