export type MaterialType = "brick" | "aerated" | "cinder";

export interface Opening {
  id: string;
  height: number;
  width: number;
  count: number;
}

export interface MasonryInput {
  height: number;
  width: number;
  thickness: number; // m
  material: MaterialType;
  openings: Opening[];
}

export const THICKNESS_OPTIONS = [
  { value: 0.12, label: "0.5 кирпича (120 мм)" },
  { value: 0.25, label: "1 кирпич (250 мм)" },
  { value: 0.38, label: "1.5 кирпича (380 мм)" },
  { value: 0.51, label: "2 кирпича (510 мм)" },
];

export const MATERIALS: Record<
  MaterialType,
  { label: string; unitsPerM2At025: number; mortarPerM3: number }
> = {
  brick: { label: "Кирпич", unitsPerM2At025: 102, mortarPerM3: 0.22 },
  aerated: { label: "Газобетон", unitsPerM2At025: 6.7, mortarPerM3: 0.05 },
  cinder: { label: "Шлакоблок", unitsPerM2At025: 12.5, mortarPerM3: 0.18 },
};

export interface MasonryResult {
  totalArea: number;
  openingsArea: number;
  netArea: number;
  volume: number;
  units: number;
  mortarM3: number;
  cementKg: number;
  cementBags: number;
  sandKg: number;
  sandM3: number;
}

export function calculate(input: MasonryInput): MasonryResult {
  const totalArea = Math.max(0, input.height * input.width);
  const openingsArea = input.openings.reduce(
    (sum, o) => sum + Math.max(0, o.height * o.width * o.count),
    0,
  );
  const netArea = Math.max(0, totalArea - openingsArea);
  const volume = netArea * input.thickness;

  const mat = MATERIALS[input.material];
  const units = Math.ceil(netArea * mat.unitsPerM2At025 * (input.thickness / 0.25));

  const mortarM3 = volume * mat.mortarPerM3;
  // ~350 кг цемента М400 на 1 м³ раствора (пропорция 1:3)
  const cementKg = mortarM3 * 350;
  const cementBags = Math.ceil(cementKg / 50);
  const sandKg = cementKg * 3;
  const sandM3 = sandKg / 1500;

  return {
    totalArea: round(totalArea, 2),
    openingsArea: round(openingsArea, 2),
    netArea: round(netArea, 2),
    volume: round(volume, 3),
    units,
    mortarM3: round(mortarM3, 3),
    cementKg: Math.round(cementKg),
    cementBags,
    sandKg: Math.round(sandKg),
    sandM3: round(sandM3, 3),
  };
}

function round(n: number, d: number) {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
}
