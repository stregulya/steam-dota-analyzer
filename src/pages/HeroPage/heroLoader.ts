import { LoaderFunctionArgs } from "react-router-dom";

export async function heroLoader({ params }: LoaderFunctionArgs) {
  const { heroName } = params;
  const res = await fetch(`http://localhost:3001/api/heroes/${heroName}/items`);
  return res.json();
}
