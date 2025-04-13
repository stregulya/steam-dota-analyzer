import { LoaderFunctionArgs } from "react-router-dom";
import { heroes } from "../../data/heroes";
import { itemsByHero } from "../../data/itemsByHero";

export function heroLoader({ params }: LoaderFunctionArgs) {
  const hero = heroes.find((h) => h.id === params.heroId);

  if (!hero) throw new Response("Not Found", { status: 404 });

  const items = itemsByHero[hero.id] ?? [];

  return { ...hero, items };
}
