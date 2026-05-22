import { round } from "./utils";

export interface ScreedInput {
  length: number;
  width: number;
  thicknessMm: number;
}

export interface ScreedResult {
  area: number;
  volume: number;
  mixKg: number;
  bags25: number;
}

// ~18 кг сухой смеси на 1 м² при толщине 10 мм
const KG_PER_M2_PER_MM = 1.8;

export function calculate(input: ScreedInput): ScreedResult {
  const area = Math.max(0, input.length * input.width);
  const volume = (area * input.thicknessMm) / 1000;
  const mixKg = area * input.thicknessMm * KG_PER_M2_PER_MM;
  const bags25 = Math.ceil(mixKg / 25);
  return {
    area: round(area, 2),
    volume: round(volume, 3),
    mixKg: Math.round(mixKg),
    bags25,
  };
}
