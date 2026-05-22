import { round } from "./utils";

export interface WallpaperInput {
  perimeter: number; // м
  wallHeight: number; // м
  rollWidth: number; // м
  rollLength: number; // м
  rapport: number; // м, подгонка рисунка (0 если нет)
}

export interface WallpaperResult {
  stripsPerRoll: number;
  stripsNeeded: number;
  rolls: number;
}

export function calculate(input: WallpaperInput): WallpaperResult {
  const stripHeight = input.wallHeight + input.rapport + 0.1; // запас
  const stripsPerRoll = Math.max(0, Math.floor(input.rollLength / stripHeight));
  const stripsNeeded = Math.ceil(input.perimeter / Math.max(0.01, input.rollWidth));
  const rolls = stripsPerRoll > 0 ? Math.ceil(stripsNeeded / stripsPerRoll) : 0;
  return {
    stripsPerRoll,
    stripsNeeded,
    rolls,
  };
}
