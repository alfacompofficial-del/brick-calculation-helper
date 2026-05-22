import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculators/wallpaper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultRow } from "./ResultRow";

export function WallpaperCalculator() {
  const [perimeter, setPerimeter] = useState(18);
  const [wallHeight, setWallHeight] = useState(2.7);
  const [rollWidth, setRollWidth] = useState(1.06);
  const [rollLength, setRollLength] = useState(10);
  const [rapport, setRapport] = useState(0);

  const result = useMemo(
    () => calculate({ perimeter, wallHeight, rollWidth, rollLength, rapport }),
    [perimeter, wallHeight, rollWidth, rollLength, rapport],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Периметр, м</Label>
            <Input type="number" min={0} step={0.1} value={perimeter}
              onChange={(e) => setPerimeter(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label>Высота стен, м</Label>
            <Input type="number" min={0} step={0.1} value={wallHeight}
              onChange={(e) => setWallHeight(Number(e.target.value) || 0)} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Ширина рулона, м</Label>
            <Input type="number" min={0} step={0.01} value={rollWidth}
              onChange={(e) => setRollWidth(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label>Длина рулона, м</Label>
            <Input type="number" min={0} step={0.5} value={rollLength}
              onChange={(e) => setRollLength(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label>Раппорт, м</Label>
            <Input type="number" min={0} step={0.05} value={rapport}
              onChange={(e) => setRapport(Number(e.target.value) || 0)} />
          </div>
        </div>
      </div>
      <div className="space-y-3 rounded-lg border border-border bg-background/40 p-5">
        <ResultRow label="Полос из рулона" value={`${result.stripsPerRoll} шт`} />
        <ResultRow label="Нужно полос" value={`${result.stripsNeeded} шт`} />
        <ResultRow label="Рулонов" value={`${result.rolls} шт`} strong />
      </div>
    </div>
  );
}
