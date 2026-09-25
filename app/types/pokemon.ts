export interface CardProps{
    id:number;
    name:string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_shiny: string;
      };
    };
  };

  types: {
    type: {
      name: string;
    };
  }[];

  abilities: {
    ability: {
      name: string;
    };
  }[];

  stats: {
    base_stat: number;
    effort: string;
    stat: {
      name: string;
    };
  }[];

  moves: {
    move: {
      name: string;
    };
  }[];
}
 