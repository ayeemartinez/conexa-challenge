'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { ListCard, EpisodesList } from './components'
import axios from 'axios';
import { error } from 'console';

export default function Home() {
  
  const pageSize = 4; // Número de personajes por página
  const [charactersPage1, setCharactersPage1] = useState([]);
  const [charactersPage2, setCharactersPage2] = useState([]);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);

  useEffect(() => {
    const fetchCharacters = async (page:number) => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        return response.data.results || [];
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    // Obtener personajes para ListCard 1
    fetchCharacters(currentPage1).then((characters) =>
      setCharactersPage1(characters)
    );

    // Obtener personajes para ListCard 2
    fetchCharacters(currentPage2 + 1).then((characters) =>
      setCharactersPage2(characters)
    );
  }, [currentPage1, currentPage2]);

  const handlePageChange1 = (page:number) => {
    setCurrentPage1(page);
  };

  const handlePageChange2 = (page:number) => {
    setCurrentPage2(page);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 lg:p-10">
      <div className='w-full flex justify-center flex-wrap gap-4 xl:flex-nowrap'>
      <ListCard
          characters={charactersPage1}
          number={1}
          pageSize={pageSize}
          currentPage={currentPage1}
          onPageChange={handlePageChange1}
        />
        <ListCard
          characters={charactersPage2}
          number={2}
          pageSize={pageSize}
          currentPage={currentPage2}
          onPageChange={handlePageChange2}
        />
      </div>
      <div className='w-full flex flex-wrap justify-center gap-4 mt-7 lg:flex-nowrap '>
        <EpisodesList type="first character's"/>
        <EpisodesList type="in common"/>
        <EpisodesList type="second character's"/>
      </div>
    </main>
  )
}
