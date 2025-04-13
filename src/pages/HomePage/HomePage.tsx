import { Hero } from "../../data/heroes";
import HeroCard from "../../Components/HeroCard";
import { useLoaderData } from "react-router-dom";

function HomePage() {
  const heroes = useLoaderData() as Hero[];
  return (
    <>
      <h2 className="mb-5">Home Page - список героев</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {heroes.map((hero) => (
          <HeroCard hero={hero} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
