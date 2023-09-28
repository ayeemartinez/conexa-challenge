import Image from "next/image"
import Morty from "../../../assets/Morty501.webp"
import { FC } from "react"

interface CardProps {
    character: {
        id: number,
        name:string,
        status:string,
        specie:string,
    }
}

export const Card: FC<CardProps> = ({character}) => {
    return(
        <div className="bg-neutrals-100 cursor-pointer rounded-xl items-center py-3 px-4 w-full max-w-[350px] align-middle transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-md md:py-6 md:px-8 ">
            <div className="flex flex-nowrap items-center align-middle">
                <div className="w-20 h-20 rounded-full block justify-center items-center md:w-24 md:h-24">
                    <Image className="w-20 h-20 flex rounded-full md:w-24 md:h-24" src={Morty} alt={"Character picture"}/>
                </div>
                <div className="flex flex-wrap w-min pl-6">
                    <h3 className="w-full text-secondary-200 font-semibold text-lg">{character.name}</h3>
                    <span className="w-full text-neutrals-500 text-sm">{character.status}</span>
                    <span className="w-full text-neutrals-500 text-sm">{character.specie}</span>
                </div>
            </div>
        </div>
    )
}
