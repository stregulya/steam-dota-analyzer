import { useLoaderData } from "react-router-dom";

function ItemPage() {
  const itemData = useLoaderData() as {
    lowest_price: string;
    volume: string;
    median_price: string;
  };
  return (
    <div>
      <p>Наименьшая цена: {itemData.lowest_price}</p>
      <p>Продаж за день: {itemData.volume}</p>
      <p>Средняя цена за день: {itemData.median_price}</p>
    </div>
  );
}

export default ItemPage;
