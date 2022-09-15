import './styles/main.css'

import LogoImg from "./assets/logo-nlw-esports.svg"

import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

function App() {
  return (
    <main className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoImg} alt='Logo da NLW edição eSports' />

      <h1 className='text-6xl text-white font-black mt-20' > 
        Seu <span className='text-transparent bg-clip-text bg-nlw-gradient'>duo</span> está aqui
      </h1>

      <Cards />
      <Footer />
      
    </main>
  )
}

export default App
