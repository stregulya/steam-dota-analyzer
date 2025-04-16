import axios from "axios";
import { load } from "cheerio";

const STEAM_URL =
  "https://steamcommunity.com/market/priceoverview/?currency=5&appid=570&market_hash_name=";

interface PriceOverview {
  success: boolean;
  lowest_price?: string;
  volume?: string;
  median_price?: string;
}

//Получает ценовую информацию по item'у из Steam Market
export async function fetchItemMarketData(
  marketHashName: string
): Promise<PriceOverview | null> {
  try {
    const response = await axios.get(STEAM_URL + marketHashName, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    return response.data;
  } catch (err) {
    console.error("Ошибка при запросе Steam Market:", err);
    return null;
  }
}
