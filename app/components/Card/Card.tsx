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
        <div className={`bg-neutrals-100 group rounded-xl items-center py-3 px-4 w-full max-w-[350px] align-middle transition-all duration-100 md:py-6 md:pl-5 lg:hover:bg-primary-300 lg:max-w-[400px] lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md`}>
            <div className="flex flex-nowrap items-center align-middle">
                <div className="w-20 h-20 rounded-full block justify-center items-center md:w-auto md:h-24">
                    <Image placeholder="blur" blurDataURL={character.image} className="w-20 h-20 flex rounded-full md:w-36 md:h-24" width={100} height={100} src={character.image} alt={"Character picture"}/>
                </div>
                <div className="flex flex-wrap w-2/3 pl-4 md:w-full">
                    <h3 className="w-full text-primary-300 font-semibold leading-4 pb-1 text-base md:!leading-[23px] xl:text-xl lg:group-hover:text-white">{character.name}</h3>
                    <div className="flex items-center align-middle">
                        <div className="text-sm">
                            {character.status === "Dead" ? '☠️' : character.status === "Alive" ? '😄' : character.status === "unknown" ? '❓' : ''}
                        </div>
                        <span className="w-full text-neutrals-400 text-xs ml-1 lg:group-hover:text-white"> {character.status} - {character.species}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
