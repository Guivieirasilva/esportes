import "./styles/main.css";

import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "./assets/logo-nlw-esports.svg";

import { CreatedAd } from "./components/CreatedAd";
import { GameBanner } from "./components/GameBanner";

import { useEffect, useState } from "react";
import { GameController } from "phosphor-react";

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
        <CreatedAd />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/70 inset-0 fixed" />
          <Dialog.Content className="w-[480px] fixed bg-[#2A2634] py-8 px-10 rounded-lg text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um anúncio
            </Dialog.Title>
            <Dialog.Content>
              <form className="mt-8">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="game">Qual o game?</label>
                  <input
                    id="game"
                    placeholder="selecione o game que desejar jogar"
                  />
                </div>

                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input
                    id="name"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Jogá há quantos anos?</label>
                    <input
                      id="yearsPlaying"
                      type="number"
                      placeholder="Tudo bem sem ZERO"
                    />
                  </div>

                  <div>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <input id="discord" placeholder="Usuario00000" />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="weekDays">Quando custuma jogar?</label>
                  </div>
                  <div>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder="De" />
                      <input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" />
                  Custumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar um duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}

export default App;
