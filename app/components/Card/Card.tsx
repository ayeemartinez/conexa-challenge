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
                    <Image placeholder="blur" blurDataURL="data:image/jpeg;base64,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" className="w-20 h-20 flex rounded-full md:w-36 md:h-24" width={100} height={100} src={character.image} alt={"Character picture"}/>
                </div>
                <div className="flex flex-wrap w-2/3 pl-4 md:pl-6 md:w-full">
                    <h3 className="w-full text-primary-300 font-semibold leading-4 pb-1 text-base md:!leading-[23px] xl:text-xl lg:group-hover:text-white">{character.name}</h3>
                    <span className="w-full text-neutrals-400 text-xs md:text-sm md:pb-1  lg:group-hover:text-white">{character.status} - {character.species}</span>
                </div>
            </div>
        </div>
    )
}
