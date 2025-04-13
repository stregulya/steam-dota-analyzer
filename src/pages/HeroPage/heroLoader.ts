import { LoaderFunctionArgs } from "react-router-dom";

export async function heroLoader({ params }: LoaderFunctionArgs) {
  const { heroId } = params;
  const res = await fetch(`http://localhost:3001/api/heroes/${heroId}/items`);
  return res.json();
}
