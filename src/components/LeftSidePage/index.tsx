"use client";
import React, { useContext, useEffect, useState } from "react";
import { useActiveCursorEffectOnPage } from "@/utils/cursorEffects";
import { ButtonComponent } from "../Button";
import ContainerComponent from "../Container";
import ToggleComponentTheme from "../toggle-theme-component";
import ThemeContext from "@/contexts/theme";
import { useUser } from "@/contexts/user";
import { cn } from "@/helpers/cn";
import Nav from "../Nav";
import SocialMedia from "../SocialMedia";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function LeftSidePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  const { getUser, setUser } = useUser();
  const [queryClient] = useState(() => new QueryClient());
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userExists = getUser();

    if (userExists) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    setLoading(false);
  }, [getUser]);

  const handleClickToDownload = () => {
    const fileUrl = "/Gustavo_Fuzer_currículo.pdf";
    const fileName = "Gustavo Fuzer - Curriculo";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSetUser = () => {
    setUser(name);
    setShowModal(false);
  };

  useActiveCursorEffectOnPage();

  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 bg-black flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">
                Seja bem vindo(a) ao meu portfólio!
              </h2>
              <p></p>
              <form className="flex flex-col">
                <input
                  placeholder="Qual o seu nome?"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <button
                  className={`${
                    name
                      ? "bg-gradient-to-r from-green-500 to-blue-500"
                      : "bg-gray-500 cursor-not-allowed"
                  } text-white font-bold py-2 px-4 rounded-md mt-4 transition ease-in-out duration-150`}
                  onClick={handleSetUser}
                  disabled={!name}
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div id="main-div" className={cn("flex-1", `cursor-effect-${theme}`)}>
        <main className="h-svh flex items-center gap-16 justify-between max-w-7xl w-full m-auto flex-col xl:flex-row px-4 xl:px-0">
          <section className=" py-16 w-full xl:w-auto flex flex-col items-center xl:items-start">
            <div className="flex gap-3 items-center">
              <ToggleComponentTheme />
              <p> - Change the day 💡</p>
            </div>
            <div className="my-8 flex flex-col">
              <div className="cursor-default">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  GUSTAVO FUZER
                </h1>
                <p className="indent-1.5 mt-3 text-sm font-medium tracking-wide sm:text-xl">
                  <span className="underline">Fullstack</span> Engineer
                </p>
              </div>
              <div className="pt-4 mb-8">
                <ButtonComponent
                  border="dashed"
                  theme={theme}
                  onClick={handleClickToDownload}
                >
                  Baixe meu currículo
                </ButtonComponent>
              </div>
              <div>
                <div title="Uma jornada de mil milhas começa com um único passo - Lao Tzu">
                  <p className="italic max-w-60 opacity-70">
                    &quot;A journey of a thousand miles begins with a single
                    step&quot;
                  </p>
                  <p className="italic max-w-60 opacity-70"> - Lao Tzu</p>
                </div>
                <section className="mt-16">
                  <Nav theme={theme} />
                </section>
                <section>
                  <SocialMedia />
                </section>
              </div>
            </div>
          </section>
          <section className="flex h-full py-16 max-w-xl w-full">
            <QueryClientProvider client={queryClient}>
              <ContainerComponent theme={theme}>{children}</ContainerComponent>
            </QueryClientProvider>
          </section>
        </main>
      </div>
    </>
  );
}
