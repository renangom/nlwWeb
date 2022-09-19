import React from "react";
import { MagnifyingGlass, MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

const DuoAnnoucement = () =>{
    return(
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-2 w-[95%]'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center '>
          <div>
            <strong className='text-2xl text-white font-black'> Não encontrou seu duo? </strong>
            <span className='text-zinc-400 block'> Publique um anúncio para encontrar novos players </span>
          </div>
          <Dialog.Trigger className='py-3 px-4 gap-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
    </div>
    )
}

export default DuoAnnoucement;