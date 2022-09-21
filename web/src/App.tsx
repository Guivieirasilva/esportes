import "./styles/main.css";

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
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={LogoImg} alt="Logo da NLW edição eSports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          duo
        </span>{" "}
        está aqui
      </h1>
      <section className="grid grid-cols-6 gap-6 mt-16">
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
