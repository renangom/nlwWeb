import React from "react";

interface IProps{
    url: string;
    title:string;
    ads:number
}
const GameBanner = ({ url,title,ads}:IProps) => {
    return(
        <a href='' className='relative rounded-lg overflow-hidden' >
            <img src={`${url}`} alt=''/>
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                <strong className='font-bold text-white block'>{title}</strong>
                <span className='text-zinc-300 block mt-1'> {ads} Anúncios </span>
            </div>
        </a>
    )
}

export default GameBanner;