import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculators/paint";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultRow } from "./ResultRow";

export function PaintCalculator() {
  const [area, setArea] = useState(40);
  const [layers, setLayers] = useState(2);
  const [coveragePerL, setCoveragePerL] = useState(10);

  const result = useMemo(
    () => calculate({ area, layers, coveragePerL }),
    [area, layers, coveragePerL],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Площадь, м²</Label>
          <Input type="number" min={0} step={1} value={area}
            onChange={(e) => setArea(Number(e.target.value) || 0)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Слоёв</Label>
            <Input type="number" min={1} step={1} value={layers}
              onChange={(e) => setLayers(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label>Укрывистость, м²/л</Label>
            <Input type="number" min={0} step={0.5} value={coveragePerL}
              onChange={(e) => setCoveragePerL(Number(e.target.value) || 0)} />
          </div>
        </div>
      </div>
      <div className="space-y-3 rounded-lg border border-border bg-background/40 p-5">
        <ResultRow label="Объём краски" value={`${result.liters} л`} />
        <ResultRow label="Банки по 3 л" value={`${result.cans3} шт`} strong />
      </div>
    </div>
  );
}
