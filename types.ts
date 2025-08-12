export type ScoreKey =
  | "marketAdjacencyPotential"
  | "designModernizationNeed"
  | "brandAwarenessVsProductAppeal"
  | "distributionGap"
  | "manufacturingAgility";

export interface FrameworkScores {
  marketAdjacencyPotential: number;
  designModernizationNeed: number;
  brandAwarenessVsProductAppeal: number;
  distributionGap: number;
  manufacturingAgility: number;
}

export interface AdjacentOpportunity {
  name: string;
  accessibility: number; // 0–100 (X)
  opportunity: number;   // 0–100 (Y)
  weight?: number;       // 1–5 (optional bubble size override)
  unmetNeed?: string;
  category?: "Prosumer" | "Hospitality" | "Residential" | "Other";
}

export interface BrandEval {
  brandName: string;
  category: string;
  summary: string;
  scores: FrameworkScores;
  souffleInsight: string;
  currentPosition?: { accessibility: number; opportunity: number };
  adjacentMarkets: AdjacentOpportunity[];
}
