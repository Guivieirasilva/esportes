import { Check, GameController } from "phosphor-react";

import { useEffect, useState, FormEvent } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup  from "@radix-ui/react-toggle-group";
import * as Dialog from "@radix-ui/react-dialog";

import { Input } from "./Form/Input";

import axios from "axios";

interface Game {
   id: string;
   title: string;
 }

export function CreatedAdModal(){
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)


  useEffect(() => {
   axios("http://localhost:3333/games").then(response => {
       setGames(response.data)
     })
 }, []);

   async function handleCreatedAd(event:FormEvent){
         event.preventDefault();

         const formData = new FormData(event.target as HTMLFormElement)
         const data = Object.fromEntries(formData)

         if(!data.name){
            return;
         }

         try{
            await axios.post(`http://localhost:3333/games/${data.game}/ads`,{
               name: data.name,
               yearsPlaying: Number(data.yearsPlaying),
               discord: data.discord,
               weekDays: weekDays.map(Number),
               hourStart: data.hourStart,
               hoursEnd: data.hoursEnd  ,
               useVoiceChannel: useVoiceChannel,
            })

            alert('Anúncio criado com sucesso')
            console.log("Anúncio Enviado")
         } catch (error) {
            console.log(error)
            alert('Erro ao criar o anúncio')  
         }
    }

   return(
      <Dialog.Portal>
          <Dialog.Overlay className="bg-black/70 inset-0 fixed" />
          <Dialog.Content className="w-[480px] fixed bg-[#2A2634] py-8 px-10 rounded-lg text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um anúncio
            </Dialog.Title>
          
              <form onSubmit={handleCreatedAd} className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="game">Qual o game?</label>
                  <select 
                     name="game"
                     id="game" 
                     className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                     defaultValue=""
                     >
                        <option disabled value="">Selecione o game que deseja jogar</option>

                        {games.map( game => { return <option key={game.id} value={game.id}>{game.title}</option>})}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id="name" name="name" placeholder="Como te chamam dentro do game?"/>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Jogá há quantos anos?</label>
                    <Input id="yearsPlaying" name="yearsPlaying" type="number" placeholder="Tudo bem sem ZERO" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input id="discord" name="discord" placeholder="Usuario00000"/>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando custuma jogar?</label>

                     <ToggleGroup.Root 
                        type="multiple" 
                        className="grid grid-cols-4 gap-2"
                        value={weekDays}
                        onValueChange={setWeekDays}
                     >
                        <ToggleGroup.Item  
                        value="0"
                        title="Domingo"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-50 ${weekDays.includes('0') ? 'bg-violet-700': 'bg-zinc-900' }` } 

                        >
                           D
                        </ToggleGroup.Item>

                        <ToggleGroup.Item   
                        value="1"
                        title="Segunda"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-500 ${weekDays.includes('1') ? 'bg-violet-700': 'bg-zinc-900' }` }

                        >
                           S
                        </ToggleGroup.Item>

                        <ToggleGroup.Item  
                        value="2"
                        title="Terça"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-500 ${weekDays.includes('2') ? 'bg-violet-700': 'bg-zinc-900' }` }
                        
                        >
                           T
                        </ToggleGroup.Item>

                        <ToggleGroup.Item  
                        value="3"
                        title="Quarta"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-500 ${weekDays.includes('3') ? 'bg-violet-700': 'bg-zinc-900' }` }

                        >
                           Q
                        </ToggleGroup.Item>

                        <ToggleGroup.Item  
                        value="4"
                        title="Quinta"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-500 ${weekDays.includes('4') ? 'bg-violet-700': 'bg-zinc-900' }` }

                        >
                           Q
                        </ToggleGroup.Item>

                        <ToggleGroup.Item  
                        value="5"
                        title="Sexta"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-500 ${weekDays.includes('5') ? 'bg-violet-700': 'bg-zinc-900' }` }
                        
                        >
                           S
                        </ToggleGroup.Item>

                        <ToggleGroup.Item  
                        value="6"
                        title="Sábado"
                        className={`w-8 h-8 rounded hover:bg-violet-700 duration-500 ${weekDays.includes('6') ? 'bg-violet-700': 'bg-zinc-900' }` }
                        
                        >
                           S
                        </ToggleGroup.Item>
                     </ToggleGroup.Root>
                    
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-1">
                      <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                      <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                <label className="mt-2 flex gap-2 text-sm items-center">
                  <Checkbox.Root  
                     checked={useVoiceChannel}  
                     className="w-6 h-6 rounded p-1 bg-zinc-900"
                     onCheckedChange={(checked) => {
                        if(checked === true) {
                           setUseVoiceChannel(true)
                        } else {
                           setUseVoiceChannel(false)
                        }
                        
                     }}
                  >
                     <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-emerald-400"/>
                     </Checkbox.Indicator>
                  </Checkbox.Root>
                  Custumo me conectar ao chat de voz
                </label>

                <footer className="mt-4 gap-4 flex justify-end">
                  <Dialog.Close 
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-700 duration-500 hover:scale-105"
                  >
                    Cancelar
                  </Dialog.Close >

                  <button 
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-700 duration-500 hover:scale-105" 
                    type="submit"
                  >
                    <GameController size={24}/>
                    Encontrar um duo
                  </button>
                </footer>
              </form>
            
          </Dialog.Content>
        </Dialog.Portal>
   )
}