'use client';
import { Card } from "./Card"
import { FC } from "react"


interface ListCardProps {
    number:number,
    characters?: {
        id: number;
        name: string;
        status: string;
        species: string,
        image:string,
      }[];
      pageSize: number; // Número de personajes por página
      currentPage: number; // Página actual
      onPageChange: (page: number) => void;
}

export const ListCard:FC <ListCardProps> = ({number, characters, pageSize, currentPage, onPageChange}) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const charactersToDisplay = characters?.slice(startIndex, endIndex) || [];
  

    return(
        <section className="w-full rounded-lg bg-white shadow-lg border border-neutrals-100 py-7 px-4 flex justify-center flex-wrap text-left md:px-7 xl:w-1/2">
            <div className="w-full flex justify-start">
                <div className="rounded-full px-4 py-2 bg-secondary-200 mb-6 text-center flex items-center">
                    <h2 className="w-full text-white font-normal text-md">CHARACTER {number}</h2>
                </div>
            </div>
            <div className="w-full  gap-5 lg:flex-nowrap">
                <div className="grid grid-cols-1 gap-5 justify-center w-full md:grid-cols-2">
                    {charactersToDisplay.map((character) => (
                            <Card key={character.id} character={character}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}