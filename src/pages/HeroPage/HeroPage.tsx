import { Link, useLoaderData } from "react-router-dom";
import { Item } from "../../data/itemsByHero";

type Hero = {
  id: string;
  name: string;
  image: string;
  items: Item[];
};

function HeroPage() {
  const hero = useLoaderData() as Hero;

  return (
    <div>
      <h2>{hero.name}</h2>
      <img src={hero.image} alt="hero img" className="mb-6 w-32 h-auto" />

      <h3 className="text-xl font-semibold mb-2">Предметы</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hero.items.map((item) => (
          <Link to={`${item.name}`}>
            <div className="grid grid-cols-3 gap-2 p-2 rounded-md border border-gray-700">
              <img
                src={item.image}
                alt={item.name}
                className="w-max h-auto rounded mb-2"
              />
              <div className="flex flex-col justify-between">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  Цена: ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-400">
                  Продаж в день: {item.salesPerDay}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroPage;
