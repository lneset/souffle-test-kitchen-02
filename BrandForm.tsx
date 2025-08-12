import { useState } from 'react';
import BubbleMap from './BubbleMap';
import { BrandEval } from '../lib/types';

const seed: BrandEval = {
  brandName: 'Tennant',
  category: 'B2B → Consumer Crossover / Commercial Cleaning',
  summary: 'Global leader in commercial cleaning tech with in-house manufacturing.',
  scores: { marketAdjacencyPotential:5, designModernizationNeed:4, brandAwarenessVsProductAppeal:3, distributionGap:5, manufacturingAgility:5 },
  souffleInsight: 'Manufacturing control + proven B2B tech = prime for prosumer & hospitality expansion.',
  currentPosition: { accessibility: 50, opportunity: 50 },
  adjacentMarkets: [
    { name: 'Prosumer / Garage', accessibility:72, opportunity:78, category:'Prosumer', unmetNeed:'Compact, rugged, premium look' },
    { name: 'Hospitality', accessibility:65, opportunity:85, category:'Hospitality', unmetNeed:'Quiet, design-forward, brand-match CMF' },
    { name: 'High-End Residential', accessibility:58, opportunity:70, category:'Residential', unmetNeed:'Luxury appliance aesthetics' }
  ]
};

export default function BrandForm() {
  const [json, setJson] = useState(JSON.stringify(seed, null, 2));
  const [data, setData] = useState<BrandEval>(seed);
  const [err, setErr] = useState<string>('');

  const handleLoad = () => {
    try {
      const parsed = JSON.parse(json);
      if (!parsed.brandName || !parsed.scores || !parsed.adjacentMarkets) throw new Error('Invalid payload');
      setData(parsed);
      setErr('');
    } catch (e: any) { setErr(e.message || 'Invalid JSON'); }
  };

  const dl = (blob: Blob, name: string) => {
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url);
  };

  const JSONtoCSV = (b: BrandEval) => {
    const head = 'name,accessibility,opportunity,weight,category,unmetNeed\n';
    const rows = b.adjacentMarkets.map(m => [
      m.name, m.accessibility, m.opportunity, (m.weight ?? ''), (m.category ?? ''), (m.unmetNeed ?? '')
    ].map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    return head + rows;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Paste Brand Evaluation (JSON)</h2>
        <textarea className="h-[420px] w-full rounded border p-3 font-mono text-sm" value={json} onChange={e=>setJson(e.target.value)} />
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <div className="flex gap-2">
          <button onClick={handleLoad} className="px-3 py-2 rounded bg-black text-white">Load</button>
          <button onClick={() => dl(new Blob([json],{type:'application/json'}), `${data.brandName}_eval.json`)} className="px-3 py-2 rounded border">Download JSON</button>
          <button onClick={() => dl(new Blob([JSONtoCSV(data)],{type:'text/csv'}), `${data.brandName}_eval.csv`)} className="px-3 py-2 rounded border">Download CSV</button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">{data.brandName} – Opportunity Map</h2>
        <BubbleMap data={data}/>
        <div className="rounded border p-4 bg-white">
          <div className="text-sm text-gray-500">{data.category}</div>
          <p className="mt-1">{data.summary}</p>
          <p className="mt-2 font-medium">Soufflé Insight</p>
          <p className="text-sm text-gray-700">{data.souffleInsight}</p>
        </div>
      </div>
    </div>
  );
}
