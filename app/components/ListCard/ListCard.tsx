'use client';
import { Card } from "./Card"
import { FC } from "react"
import { useState } from "react";
import ReactPaginate from "react-paginate";


interface ListCardProps {
    number:string,
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

  const totalPages = Math.ceil((characters?.length || 0) / pageSize);


  const [page, setPage] = useState(1);

  const handlePageClick = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1);
  };

  return (
    <section className="w-full rounded-lg bg-white shadow-lg border border-neutrals-100 py-7 px-4 flex justify-center flex-wrap text-left md:px-7 xl:w-1/2">
      <div className="w-full flex justify-start">
        <div className="rounded-full px-4 py-2 bg-primary-100 mb-6 text-center flex items-center h-10">
          <h2 className="w-full text-primary-300 font-normal text-md">{number} character</h2>
        </div>
      </div>
      <div className="w-full gap-5 lg:flex-nowrap">
        <div className="grid grid-cols-1 gap-5 justify-center w-full md:grid-cols-2">
          {charactersToDisplay.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        <div className="w-full mt-4 flex flex-nowrap justify-end">
          <ReactPaginate
            pageCount={totalPages}
            initialPage={1}
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