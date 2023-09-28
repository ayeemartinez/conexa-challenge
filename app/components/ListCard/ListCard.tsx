import { Card } from "./Card"
import { FC } from "react"

interface ListCardProps {
    number:number,
}

export const ListCard:FC <ListCardProps> = ({number}) => {

    const characters = [
        { 
            id: 430,
            name: "Rick",
            status: "Alive",
            specie: "Human"
        },
        {   
            id: 432,
            name: "Morty",
            status: "Alive",
            specie: "Human"
        },
    ]

    return(
        <section className="w-full rounded-lg bg-white shadow-lg border border-neutrals-100 py-7 px-4 flex justify-center flex-wrap text-left md:px-7 xl:w-1/2">
            <div className="w-full flex justify-start">
                <div className="rounded-full px-4 py-2 bg-primary-200 mb-6 text-center flex items-center">
                    <h2 className="w-full text-white font-normal text-md">CHARACTER {number}</h2>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-4 lg:flex-nowrap">
                <div className="flex flex-col gap-y-4 justify-center w-full max-w-[350px]">
                    {characters.map((character) => (
                            <Card key={character.id} character={character}/>
                        ))

                    }
                </div>
                <div className="flex flex-col gap-y-4 justify-center w-full max-w-[350px]">
                    {characters.map((character) => (
                            <Card key={character.id} character={character}/>
                        ))

                    }
                </div>
            </div>
        </section>
    )
}