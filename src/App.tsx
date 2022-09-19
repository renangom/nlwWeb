import './styles/main.css'
import logo from './assets/Logo.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GameBanner from './components/GameBanner'
import DuoAnnoucement from './components/DuoAnnoucement'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'

interface IGames{
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number
  }
}
function App() {
  const [games, setGames] = useState<IGames[]>([])

  useEffect( () => {
    const fetchGames = async () => {
      const data = await axios.get('http://localhost:3333/games');
      setGames(data.data)
      console.log(data.data)
    }

    fetchGames()
  },[])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-8 ">
      <img src={logo} />

      <h1 className='text-6xl text-white font-black mt-10'> Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui</h1>
      <div className="grid grid-cols-6 gap-6 mt-16 pr-10 pl-10">
        {games.map((game) => {
          return(
            <GameBanner url={game.bannerUrl} ads={game._count.ads} title={game.title} key={game.id} />
          )
        })}
      </div>
      <div className='flex justify-center w-full'>
        <Dialog.Root>
          <DuoAnnoucement />
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed rounded-lg w-[480px] shadow-lg shadow-black/25 bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              
              <Dialog.Title className="text-3xl font-black"> Publique um anúncio </Dialog.Title>
              
              
                 <form className='mt-4 flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='game' className='font-semibold'>Qual o game?</label>
                    <Input id='game' placeholder='Selecione o game que deseja jogar' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='name'>Seu nome ou nickname</label>
                    <Input id='name' placeholder='Como te chamam dentro do game' />
                  </div>
                  <div className='grid grid-cols gap-4'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                      <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='discord'>Qual seu discord</label>
                      <Input id="discord" type="text" placeholder='Usuario#0000' />
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='weekDays'>Quando costuma jogar?</label>
                      <div className='grid grid-cols-4 gap-2'>
                        <button className='w-8 h-8 rounded bg-zinc-900'  title='Domingo'>D</button >
                        <button className='w-8 h-8 rounded bg-zinc-900' title='Segunda'>S</button >
                        <button className='w-8 h-8 rounded bg-zinc-900' title='Terça'>T</button >
                        <button className='w-8 h-8 rounded bg-zinc-900' title='Quarta'>Q</button >
                        <button className='w-8 h-8 rounded bg-zinc-900' title='Quinta'>Q</button >
                        <button className='w-8 h-8 rounded bg-zinc-900' title='Sexta'>S</button >
                        <button className='w-8 h-8 rounded bg-zinc-900' title='Sábado'>S</button>
                      </div>
                    </div>
                    <div className='flex flex-col-gap-2 flex-1'>
                      <label htmlFor='discord'>Qual horário do dia?</label>
                      <div className='grid grid-cols-2 gap-2'>
                        <Input id='hourStart' type='time' placeholder='De' /> 
                        <Input id='hourEnd' type='time' placeholder='Até' /> 
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 flex gap-2 text-sm'>
                    <Input type='checkbox' />
                    Costumo me conectar ao chat de voz.
                  </div>
                  <footer className='mt-4 flex justify-end gap-4'>
                    <Dialog.Close type='button' className='hover:bg-zinc-600 bg-zinc-500 px-5 h-12 rounded-md font-semibold'>Cancelar</Dialog.Close>
                    <button className='hover:bg-violet-600 flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold' type='submit'><GameController size={24} /> Encontrar Duo </button>
                  </footer>

                 </form>

            </Dialog.Content>

          </Dialog.Portal>
          
        </Dialog.Root>
      </div>
    </div>
  )
}

export default App
