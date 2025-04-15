import { Link, useLoaderData } from "react-router-dom";

function ItemPage() {
  const itemData = useLoaderData() as {
    name: string;
    sell_listings: number;
    sell_price_text: string;
  };
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-xl text-white">
        <h2 className="text-xl font-bold mb-2">Информация о предмете</h2>
        <p>💰 Имя: {itemData.name}</p>
        <p>📈 На ТП: {itemData.sell_listings}</p>
        <p>📊 Цена: {itemData.sell_price_text}</p>
      </div>
      <Link to={-1} className="text-blue-400 underline mt-4 inline-block">
        ← Назад
      </Link>
    </>
  );
}

export default ItemPage;
