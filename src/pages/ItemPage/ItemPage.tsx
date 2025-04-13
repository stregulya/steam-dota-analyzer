import { Link, useLoaderData } from "react-router-dom";

function ItemPage() {
  const itemData = useLoaderData() as {
    lowest_price: string;
    volume: string;
    median_price: string;
  };
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-xl text-white">
        <h2 className="text-xl font-bold mb-2">Информация о предмете</h2>
        <p>💰 Наименьшая цена: {itemData.lowest_price}</p>
        <p>📈 Продаж за день: {itemData.volume}</p>
        <p>📊 Средняя цена за день: {itemData.median_price}</p>
      </div>
      <Link to={-1} className="text-blue-400 underline mt-4 inline-block">
        ← Назад
      </Link>
    </>
  );
}

export default ItemPage;
