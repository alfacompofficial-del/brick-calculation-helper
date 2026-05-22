import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculators/plaster";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultRow } from "./ResultRow";

export function PlasterCalculator() {
  const [area, setArea] = useState(20);
  const [thicknessMm, setThicknessMm] = useState(15);
  const [consumptionPerMm, setConsumptionPerMm] = useState(1);

  const result = useMemo(
    () => calculate({ area, thicknessMm, consumptionPerMm }),
    [area, thicknessMm, consumptionPerMm],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Площадь стен, м²</Label>
          <Input type="number" min={0} step={1} value={area}
            onChange={(e) => setArea(Number(e.target.value) || 0)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Толщина слоя, мм</Label>
            <Input type="number" min={0} step={1} value={thicknessMm}
              onChange={(e) => setThicknessMm(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label>Расход, кг/м²/мм</Label>
            <Input type="number" min={0} step={0.1} value={consumptionPerMm}
              onChange={(e) => setConsumptionPerMm(Number(e.target.value) || 0)} />
          </div>
        </div>
      </div>
      <div className="space-y-3 rounded-lg border border-border bg-background/40 p-5">
        <ResultRow label="Всего смеси" value={`${result.totalKg} кг`} />
        <ResultRow label="Мешки по 30 кг" value={`${result.bags30} шт`} strong />
      </div>
    </div>
  );
}
