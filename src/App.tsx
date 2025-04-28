import { useEffect, useState } from 'react';
import { fetchStock } from './api';
import { StockTable } from './StockTable';
import type { Stock } from './types';

const SYMBOLS = ['AAPL','GOOGL','MSFT','AMZN','TSLA'];

export default function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function load() {
      try {
        const data = await Promise.all(SYMBOLS.map(fetchStock));
        setStocks(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className="p-4">Loading…</p>;
  if (error)   return <p className="p-4 text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Stock Dashboard</h1>
      <StockTable stocks={stocks} />
    </div>
  );
}
