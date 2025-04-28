import type { Stock } from './types';
const API_KEY = import.meta.env.VITE_FINNHUB_KEY;
const BASE = 'https://finnhub.io/api/v1';

export async function fetchStock(symbol: string): Promise<Stock> {
  const res = await fetch(`${BASE}/quote?symbol=${symbol}&token=${API_KEY}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return {
    symbol,
    currentPrice: data.c,
    changePercent: ((data.c - data.pc) / data.pc) * 100,
  };
}
