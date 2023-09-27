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
        <div className="bg-neutrals-100 cursor-pointer rounded-xl items-center max-w-[320px] align-middle py-6 px-8 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-md">
            <div className="flex flex-nowrap items-center align-middle">
                <div className="w-24 h-24 rounded-full flez justify-center items-center">
                    <Image width={96} height={96} className="w-24 h-24 rounded-full" src={Morty} alt={"Character picture"}/>
                </div>
                <div className="flex flex-wrap pl-6">
                    <h3 className="w-full text-secondary-200 font-semibold text-lg">{character.name}</h3>
                    <span className="w-full text-neutrals-500 text-sm">{character.status}</span>
                    <span className="w-full text-neutrals-500 text-sm">{character.specie}</span>
                </div>
            </div>
        </div>
    )
}
