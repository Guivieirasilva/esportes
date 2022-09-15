

export function Cards() {
   return(
      <section className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden duration-500 hover:scale-105'>
          <img src='./game-1.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden duration-500 hover:scale-105'>
          <img src='./game-2.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>1 anúncios</span>
          </div>
        </a> 

        <a href='' className='relative rounded-lg overflow-hidden duration-500 hover:scale-105'>
          <img src='./game-3.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Cs Go</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden duration-500 hover:scale-105'>
          <img src='./game-4.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden duration-500 hover:scale-105'>
          <img src='./game-5.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>6 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden duration-500 hover:scale-105'>
          <img src='./game-6.png' alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>

      </section>
   )
}