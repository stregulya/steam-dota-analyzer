import { Link } from "react-router-dom";

type Hero = {
  id: number;
  heroName: string;
};

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <Link
      key={hero.id}
      to={`hero/${hero.heroName}`}
      className="bg-gray-800 rounded-xl p-2 hover:bg-gray-700 transition duration-200"
    >
      <div>
        <h3 className="p-4 text-center font-semibold">{hero.heroName}</h3>
      </div>
    </Link>
  );
}
