import express from "express";
import fetch from "node-fetch";
import cors from "cors";
// import axios from "axios";
// import * as cheerio from "cheerio";

const heroes = [
  {
    id: "juggernaut",
    name: "Juggernaut",
    items: [
      {
        id: "Blessings_of_the_Crystalline",
        name: "Blessings of the Crystalline",
        market_hash_name: "Blessings of the Crystalline Blade",
      },
      {
        id: "Provocation_of_Ruins",
        name: "Provocation of Ruins",
        market_hash_name: "Provocation of Ruin",
      },
    ],
  },
  {
    id: "phantom_assassin",
    name: "Phantom Assassin",
    items: [
      {
        id: "Manifold_Paradox",
        name: "Manifold Paradox",
        market_hash_name: "Manifold Paradox",
      },
    ],
  },
];

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/steam-item", async (req, res) => {
  const { market_hash_name } = req.query;

  if (!market_hash_name)
    return res.status(400).json({ error: "market_hash_name is required" });

  const url = `https://steamcommunity.com/market/priceoverview/?appid=570&currency=5&market_hash_name=${encodeURIComponent(
    market_hash_name
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from Steam" });
  }
});

app.get("/api/heroes", (req, res) => {
  res.json(heroes);
});

app.get("/api/heroes/:id/items", (req, res) => {
  const heroId = req.params.id;
  const hero = heroes.find((h) => heroId === h.id);
  if (!hero) return res.status(404).json({ error: "Hero not found" });

  res.json(hero.items);
});

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
