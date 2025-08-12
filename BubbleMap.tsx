import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Scatter } from 'recharts';
import { BrandEval } from '../lib/types';
import { weightedScore } from '../lib/score';

type Props = { data: BrandEval };

const colorFor = (c?: string) => (
  c === 'Prosumer' ? '#2ecc71' :
  c === 'Hospitality' ? '#1abc9c' :
  c === 'Residential' ? '#8e44ad' : '#7f8c8d'
);

export default function BubbleMap({ data }: Props) {
  const bubbles = data.adjacentMarkets.map(m => {
    const wScore = m.weight ?? weightedScore(data.scores);
    return { x: m.accessibility, y: m.opportunity, z: wScore, name: m.name, category: m.category, unmetNeed: m.unmetNeed };
  });

  const current = { x: data.currentPosition?.accessibility ?? 50, y: data.currentPosition?.opportunity ?? 50, z: 3, name: data.brandName, category: 'Current' };

  return (
    <div className="w-full h-[520px] rounded-xl border bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 16, right: 16, bottom: 16, left: 16 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="Accessibility" domain={[0,100]} />
          <YAxis type="number" dataKey="y" name="Opportunity" domain={[0,100]} />
          <ZAxis type="number" dataKey="z" range={[200, 1400]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(val: any, name: any) => {
            if (name === 'z') return [Number(val).toFixed(2), 'Weighted Score'];
            if (name === 'x') return [val, 'Accessibility'];
            if (name === 'y') return [val, 'Opportunity'];
            return [val, name];
          }} />
          <Scatter name="Current" data={[current]} fill="#34495e" />
          <Scatter name="Opportunities" data={bubbles} fill="#000000">
            {bubbles.map((b, i) => (
              <circle key={i} cx={0} cy={0} r={0} fill={colorFor(b.category as string)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
