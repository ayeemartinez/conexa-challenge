'use client';
import { Character } from "@/app/types/types";
import { Card } from "../Card"
import { FC } from "react"
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { fetchCharactersByPage } from "@/app/api";
import { ListCardSkeleton } from "./ListCardSkeleton";

interface ListCardProps {
    id:number,
}

export const ListCard:FC <ListCardProps> = ({id}) => {
  const charactersPerPage = 4; 
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(characters.length / charactersPerPage);
  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const currentCharacters = characters.slice(startIndex, endIndex);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<number | null>(null); 


  useEffect(() => {
    if (characters) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [characters]);

  const fetchAndSetCharacters = async () => {
    fetchCharactersByPage(id).then((data) => {
      setCharacters(data);
    });
  };

  useEffect(() => {
    fetchAndSetCharacters();
  }, []);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const handleCardClick = (characterId: number) => {
    if (selectedCard === characterId) {
      setSelectedCard(null);
    } else {
      setSelectedCard(characterId);
    }
  };

  
  return (

    <>
    {
      loading ? 
       (
        <ListCardSkeleton/>
      ) :
      
      (
        
    <section className="w-full rounded-lg bg-white shadow-lg border border-neutrals-100 py-7 px-4 flex justify-center flex-wrap text-left md:px-7 xl:w-1/2">
      <div className="w-full flex justify-start">
        <div className="rounded-full px-4 py-2 bg-primary-100 mb-6 text-center flex items-center h-10">
          <h2 className="w-full text-primary-300 font-normal text-md">Character {id} </h2>
        </div>
      </div>
      <div className="w-full gap-5 lg:flex-nowrap">
        <div className="justify-center w-full grid gap-5 sm:grid-cols-2">
          {currentCharacters.map((character) => (
            <Card key={character.id} 
                  character={character} 
                  isSelected={selectedCard === character.id} 
                  onClick={() => handleCardClick(character.id)} />
          ))}
        </div>
        <div className="w-full mt-4 flex flex-nowrap justify-end">
          <ReactPaginate
            pageCount={pageCount}
            initialPage={0}
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            containerClassName={'flex space-x-2 text-neutrals-300'} 
            activeLinkClassName={'text-primary-200 font-semibold underline underline-offset-4'}
            />
        </div>
      </div>
    </section>
      )
    }
    </>
    )
}