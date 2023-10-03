'use client';
import Image from "next/image"
import Morty from "../../../assets/Morty501.webp"
import { FC } from "react"
import { Character } from "@/app/types/types";


interface CardProps {
    character:Character;
}

export const Card: FC<CardProps> = ({character}) => {
    return(
        <div className={` bg-neutrals-100 cursor-pointer group rounded-xl items-center py-3 px-4 w-full align-middle transition-all duration-100 md:py-6 md:pl-5 lg:hover:bg-primary-300 max-w-[400px] lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md`}>
            <div className="flex flex-nowrap items-center align-middle">
                <div className="w-20 h-20 rounded-full block justify-center items-center md:w-auto md:h-24">
                    <Image placeholder="blur" blurDataURL={character.image} className="w-20 h-20 flex rounded-full md:w-36 md:h-24" width={100} height={100} src={character.image} alt={character.name}/>
                </div>
                <div className="flex flex-wrap w-2/3 pl-4 md:w-full">
                    <h3 className="w-full text-primary-300 font-semibold leading-4 pb-2 text-base md:!leading-[23px] xl:text-[19px] lg:group-hover:text-white">{character.name}</h3>
                    <div className="flex flex-nowrap items-center w-full">
                        <div className="text-center text-xs w-5">
                            {character.status === "Dead" ? '🔴' : character.status === "Alive" ? '🟢' :  '⚫'}
                        </div>
                        <span className="w-full ml-2 text-neutrals-400 text-xs mr-1 lg:group-hover:text-white lg:text-base "> {character.status} </span>
                    </div>
                    <div className="flex flex-nowrap items-center lg:items-start w-full">
                        <div className="text-center text-sm w-5 lg:pt-[2px] ">
                            {character.species === "Human" ? '🧑🏼' : character.species === "unknown" ? '❓' : '👽'}
                        </div>
                        <span className=" w-full ml-2 text-neutrals-400 text-xs pt-[2px] lg:group-hover:text-white lg:text-base lg:pt-0"> {character.species}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
