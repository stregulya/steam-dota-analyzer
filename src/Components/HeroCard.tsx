import { Link } from "react-router-dom";
import { Hero } from "../data/heroes";

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <Link
      key={hero.id}
      to={`hero/${hero.id}`}
      className="bg-gray-800 rounded-xl p-2 hover:bg-gray-700 transition duration-200"
    >
      <div>
        {/* <img
          src={hero.image}
          alt={`${hero.name} img`}
          className="w-full h-auto rounded"
        /> */}
        <h3 className="mt-2 text-center font-semibold">{hero.name}</h3>
      </div>
    </Link>
  );
}
