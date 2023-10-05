// api/api.ts
import axios from 'axios';
import { Episode, Character } from './types/types';

export const fetchCharactersByPage = async (page: number): Promise<Character[]> => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    const characters: Character[] = response.data.results.map((result: Character) => {
      return {
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        image: result.image,
        episode: result.episode,
      };
    });

    return characters;
  } catch (error) {
    console.error('Error en fetchCharacters:', error);
    throw error;
  }
};

export const fetchEpisodesByUrl = async (episodeUrls: string[]): Promise<Episode[]> => {
  try {
    const promises: Promise<Episode>[] = episodeUrls.map(async (url) => {
      const response = await axios.get(url);
      return response.data as Episode;
    });

    const episodes = await Promise.all(promises);
    return episodes;
  } catch (error) {
    console.error('Error en fetchEpisodesByUrl:', error);
    throw error;
  }
};
