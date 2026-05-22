import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculators/screed";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultRow } from "./ResultRow";

export function ScreedCalculator() {
  const [length, setLength] = useState(5);
  const [width, setWidth] = useState(4);
  const [thicknessMm, setThicknessMm] = useState(50);

  const result = useMemo(
    () => calculate({ length, width, thicknessMm }),
    [length, width, thicknessMm],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Длина, м</Label>
            <Input type="number" min={0} step={0.1} value={length}
              onChange={(e) => setLength(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label>Ширина, м</Label>
            <Input type="number" min={0} step={0.1} value={width}
              onChange={(e) => setWidth(Number(e.target.value) || 0)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Толщина стяжки, мм</Label>
          <Input type="number" min={0} step={5} value={thicknessMm}
            onChange={(e) => setThicknessMm(Number(e.target.value) || 0)} />
        </div>
      </div>
      <div className="space-y-3 rounded-lg border border-border bg-background/40 p-5">
        <ResultRow label="Площадь" value={`${result.area} м²`} />
        <ResultRow label="Объём смеси" value={`${result.volume} м³`} />
        <ResultRow label="Сухая смесь" value={`${result.mixKg} кг`} />
        <ResultRow label="Мешки по 25 кг" value={`${result.bags25} шт`} strong />
      </div>
    </div>
  );
}
