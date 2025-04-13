import express from "express";
import fetch from "node-fetch";
import cors from "cors";

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

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
