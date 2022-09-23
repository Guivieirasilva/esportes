import { MagnifyingGlassPlus } from "phosphor-react"

import * as Dialog from "@radix-ui/react-dialog"


export function CreatedAdBanner(){
   return(
      <footer className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 ' >
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center xs:px-4 xs:py-4'>
          <div>
            <strong className='text-2xl sm:text-xl xs:text-sm text-white font-black block '>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block sm:text-xs'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <Dialog.Trigger className=' sm:text-xs sm:gap-1 xs:py-2 xs:px-2 xs:text-[10px] py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3 duration-500 hover:scale-105'>
            <MagnifyingGlassPlus size={20} /> Publicar Anúncio
          </Dialog.Trigger>
        </div>
      </footer>
   )
}