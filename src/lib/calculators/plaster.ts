import { round } from "./utils";

export interface PlasterInput {
  area: number;
  thicknessMm: number;
  consumptionPerMm: number; // кг/м² на каждый мм слоя, обычно ~1.0
}

export interface PlasterResult {
  totalKg: number;
  bags30: number;
}

export function calculate(input: PlasterInput): PlasterResult {
  const totalKg = Math.max(0, input.area * input.thicknessMm * input.consumptionPerMm);
  return {
    totalKg: Math.round(totalKg),
    bags30: Math.ceil(totalKg / 30),
  };
}
