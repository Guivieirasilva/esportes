import "./styles/main.css";
import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "./assets/logo-nlw-esports.svg";

import { CreatedAdBanner } from "./components/CreatedAdBanner";
import { GameBanner } from "./components/GameBanner";

import { useEffect, useState } from "react";
import { CreatedAdModal } from "./components/CreatedAdModal";


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then(response => {
       setGames(response.data)
     })
  }, []);


  return (
    <main className="max-w-[1200px] mx-auto flex flex-col items-center my-20 xl:w-[970px] lg:w-[700px] sm:w-[520px] xs:w-[300px]  ">
      <img src={LogoImg} alt="Logo da NLW edição eSports" />
      <h1 className="text-6xl text-white font-black mt-20 sm:text-5xl ">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-nlw-gradient ">
          duo
        </span>{" "}
        está aqui
      </h1>
      <section className="grid grid-cols-6 gap-6 mt-16 lg:grid-cols-3 lg:gap-10 sm:grid-cols-2 xs:grid-cols-1 ">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </section>
      <Dialog.Root>
        <CreatedAdBanner />
        <CreatedAdModal />
      </Dialog.Root>
    </main>
  );
}

export default App;
