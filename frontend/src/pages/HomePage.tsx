import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HeroCard from "../components/HeroCard";

export type Hero = {
  id: number;
  heroName: string;
};

function HomePage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const heroes = useLoaderData() as Hero[];
  return (
    <>
      <h2 className="mb-5">Home Page - список героев</h2>
      <input
        type="text"
        className="mb-4 p-2 focus:outline-none rounded-md bg-slate-700"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {heroes
          .sort((a, b) => {
            if (a.heroName < b.heroName) return -1;
            if (a.heroName > b.heroName) return 1;
            return 0;
          })
          .filter((hero) => {
            if (searchValue === "") return true;
            return hero.heroName
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
          .map((hero) => (
            <HeroCard hero={hero} key={hero.id} />
          ))}
      </div>
    </>
  );
}

export default HomePage;
