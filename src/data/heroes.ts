export type Hero = {
  id: string;
  name: string;
  items: { id: string; name: string; market_hash_name: string }[];
};

export const heroes: Hero[] = [
  {
    id: "juggernaut",
    name: "Juggernaut",
    items: [
      {
        id: "Blessings_of_the_Crystalline",
        name: "Blessings of the Crystalline",
        market_hash_name: "Blessings of the Crystalline Blade",
      },
      {
        id: "Provocation_of_Ruins",
        name: "Provocation of Ruins",
        market_hash_name: "Provocation of Ruin",
      },
    ],
  },
  {
    id: "phantom_assassin",
    name: "Phantom Assassin",
    items: [
      {
        id: "Manifold_Paradox",
        name: "Manifold Paradox",
        market_hash_name: "Manifold Paradox",
      },
    ],
  },
];
