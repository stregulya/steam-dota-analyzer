import { Link, useLoaderData } from "react-router-dom";

function HeroPage() {
  const hero = useLoaderData() as {
    id: number;
    hashName: string;
    name: string;
    items: {
      name: string;
      hash_name: string;
      sell_listings: number;
      sell_price: number;
      sell_price_text: string;
      app_icon: string;
      app_name: string;
      asset_description: {
        appid: number;
        classid: string;
        instanceid: string;
        background_color: string;
        icon_url: string;
        tradable: number;
        name: string;
        name_color: string;
        type: string;
        market_name: string;
        market_hash_name: string;
        commodity: number;
      };
      sale_price_text: string;
    }[];
  };

  return (
    <div>
      <h2>{hero.name}</h2>

      <h3 className="text-xl font-semibold mb-2">Предметы</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hero.items
          .sort((a, b) => {
            if (a.sell_listings > b.sell_listings) return -1;
            if (a.sell_listings < b.sell_listings) return 1;
            return 0;
          })
          .filter((item) => {
            const price = parseInt(item.sell_price_text.slice(1, -1));
            if (price > 0.1 && item.sell_listings > 10) return true;
            return false;
          })
          .map((item) => (
            <Link to={`${item.name}`}>
              <div
                className="grid grid-cols-2 gap-2 p-2 rounded-md border"
                style={{ borderColor: `#${item.asset_description.name_color}` }}
              >
                <img
                  src={
                    "https://community.fastly.steamstatic.com/economy/image/" +
                    item.asset_description.icon_url
                  }
                  alt={item.name}
                  className="w-max h-auto rounded mb-2"
                />
                <div className="flex flex-col justify-between">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p>Count: {item.sell_listings}</p>
                  <p>Price: {item.sale_price_text}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default HeroPage;
