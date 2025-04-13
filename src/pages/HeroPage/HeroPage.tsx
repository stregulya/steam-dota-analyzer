import { Link, useLoaderData } from "react-router-dom";

function HeroPage() {
  const items = useLoaderData() as {
    id: string;
    name: string;
    market_hash_name: string;
  }[];

  return (
    <div>
      {/* <h2>{hero.name}</h2> */}
      {/* <img src={hero.image} alt="hero img" className="mb-6 w-32 h-auto" /> */}

      <h3 className="text-xl font-semibold mb-2">Предметы</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link to={`${item.name}`}>
            <div className="grid grid-cols-3 gap-2 p-2 rounded-md border border-gray-700">
              {/* <img
                src={item.image}
                alt={item.name}
                className="w-max h-auto rounded mb-2"
              /> */}
              <div className="flex flex-col justify-between">
                <h4 className="text-lg font-semibold">{item.name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroPage;
