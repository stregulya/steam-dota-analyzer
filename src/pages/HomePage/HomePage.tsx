import { heroes } from "../../data/heroes";
import HeroCard from "../../Components/HeroCard";

function HomePage() {
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
