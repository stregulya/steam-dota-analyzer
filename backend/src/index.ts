import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { Hero } from "./types";

const app = express();
const PORT = 3001;

app.use(cors());

//Читаем файл с героями и предметами
const dataPath = path.join(__dirname, "data/data.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const heroesAndItems: Hero[] = JSON.parse(rawData);

//Эндпоинт: все герои
app.get("/api/heroes", (req: Request, res: Response) => {
  const heroes = heroesAndItems.map((hero) => ({
    id: hero.id,
    heroName: hero.name,
  }));
  res.json(heroes);
});

//Эндпоинт: все предметы у героя
app.get("/api/heroes/:heroName/items", (req: Request, res: Response) => {
  const hero = heroesAndItems.find((h) => h.name === req.params.heroName);
  if (!hero) return res.status(404).json({ error: "Hero not found" });

  res.json(hero);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
