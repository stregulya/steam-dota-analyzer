import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Hero } from "../types";
import { fetchItemMarketData } from "../services/steamMarketService";

const router = Router();

//Читаем файл с героями и предметами
const dataPath = path.join(__dirname, "../data/data.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const heroesAndItems: Hero[] = JSON.parse(rawData);

//Эндпоинт: все герои
router.get("/heroes", (req: Request, res: Response) => {
  const heroes = heroesAndItems.map((hero) => ({
    id: hero.id,
    heroName: hero.name,
  }));
  res.json(heroes);
});

//Эндпоинт: все предметы у героя
router.get("/heroes/:heroName/items", (req: Request, res: Response) => {
  const hero = heroesAndItems.find((h) => h.name === req.params.heroName);
  if (!hero) {
    res.status(404).json({ error: "Hero not found" });
    return;
  }

  res.json(hero);
});

//Эндпоинт: все предметы героя
router.get(
  "/heroes/:heroName/:itemName",
  async (req: Request, res: Response) => {
    const { heroName, itemName } = req.params;

    const hero = heroesAndItems.find((h) => h.name === heroName);
    if (!hero) {
      res.status(404).json({ error: "Hero not found" });
      return;
    }

    const item = hero.items.find((i) => i.name === itemName);
    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    const itemHashName = encodeURIComponent(item.hash_name);
    const marketData = await fetchItemMarketData(itemHashName);

    if (!marketData) {
      res.status(500).json({ error: "Failed to fetch market data" });
      return;
    }

    res.json({
      name: item.name,
      sell_listings: item.sell_listings,
      lowest_price: marketData.lowest_price,
      volume: marketData.volume,
      median_price: marketData.median_price,
    });
  }
);

export default router;
