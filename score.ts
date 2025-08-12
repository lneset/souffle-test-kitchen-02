import { FrameworkScores, ScoreKey } from './types';

export const defaultWeights: Record<ScoreKey, number> = {
  marketAdjacencyPotential: 0.35,
  designModernizationNeed: 0.15,
  brandAwarenessVsProductAppeal: 0.15,
  distributionGap: 0.2,
  manufacturingAgility: 0.15,
};

export function weightedScore(s: FrameworkScores, w = defaultWeights) {
  return (
    s.marketAdjacencyPotential * w.marketAdjacencyPotential +
    s.designModernizationNeed * w.designModernizationNeed +
    s.brandAwarenessVsProductAppeal * w.brandAwarenessVsProductAppeal +
    s.distributionGap * w.distributionGap +
    s.manufacturingAgility * w.manufacturingAgility
  );
}
