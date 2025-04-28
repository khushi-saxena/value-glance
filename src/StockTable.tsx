import type { Stock } from './types';

interface Props { stocks: Stock[]; }

export function StockTable({ stocks }: Props) {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Symbol</th>
          <th className="px-4 py-2 text-right">Price</th>
          <th className="px-4 py-2 text-right">Change %</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map(s => (
          <tr key={s.symbol} className="border-t">
            <td className="px-4 py-2">{s.symbol}</td>
            <td className="px-4 py-2 text-right">
              ${s.currentPrice.toFixed(2)}
            </td>
            <td className={
              'px-4 py-2 text-right ' +
              (s.changePercent >= 0 ? 'text-green-600' : 'text-red-600')
            }>
              {s.changePercent.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
