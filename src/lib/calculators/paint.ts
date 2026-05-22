import { round } from "./utils";

export interface PaintInput {
  area: number;
  layers: number;
  coveragePerL: number; // м²/л в один слой
}

export interface PaintResult {
  liters: number;
  cans3: number;
}

export function calculate(input: PaintInput): PaintResult {
  const liters = (input.area * input.layers) / Math.max(0.01, input.coveragePerL);
  return {
    liters: round(liters, 2),
    cans3: Math.ceil(liters / 3),
  };
}
