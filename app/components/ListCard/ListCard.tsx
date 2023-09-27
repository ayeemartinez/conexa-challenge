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
        {   
            id: 433,
            name: "Aye",
            status: "Alive",
            specie: "Human"
        }
    ]

    return(
        <section className="w-full rounded-lg bg-neutrals-200 p-7 flex justify-center flex-wrap text-left lg:w-1/2">
            <h2 className="w-full text-left mb-4 text-neutrals-400 font-normal text-3xl">Character #{number}</h2>
            <div className="w-full flex flex-wrap justify-center gap-y-4 md:flex-nowrap md:gap-y-0">
                <div className="flex flex-col gap-y-4 mr-0 justify-center md:mr-7">
                    {characters.map((character) => (
                            <Card key={character.id} character={character}/>
                        ))

                    }
                </div>
                <div className="flex flex-col gap-y-4 justify-center">
                    {characters.map((character) => (
                            <Card key={character.id} character={character}/>
                        ))

                    }
                </div>
            </div>
        </section>
    )
}