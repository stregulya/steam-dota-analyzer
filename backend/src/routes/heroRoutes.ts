import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Hero } from "../types";

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
router.get("/heroes/:heroName/:itemName", (req: Request, res: Response) => {
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

  res.json({
    name: item.name,
    sell_listings: item.sell_listings,
    sell_price_text: item.sell_price_text,
  });
});

export default router;
