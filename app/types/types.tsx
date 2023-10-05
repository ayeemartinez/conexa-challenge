export interface Character {
    id: number;
    name: string;
    status:string;
    species:string;
    image:string;
    episode:string[] | null,
  }
  
  export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }