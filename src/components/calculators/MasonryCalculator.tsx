import { useMemo, useState } from "react";
import {
  calculate,
  MATERIALS,
  THICKNESS_OPTIONS,
  type MaterialType,
  type Opening,
} from "@/lib/calculators/masonry";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { ResultRow } from "./ResultRow";

export function MasonryCalculator() {
  const [height, setHeight] = useState(3);
  const [width, setWidth] = useState(6);
  const [thickness, setThickness] = useState(0.25);
  const [material, setMaterial] = useState<MaterialType>("brick");
  const [openings, setOpenings] = useState<Opening[]>([
    { id: crypto.randomUUID(), height: 1.5, width: 1.2, count: 1 },
  ]);

  const result = useMemo(
    () => calculate({ height, width, thickness, material, openings }),
    [height, width, thickness, material, openings],
  );

  const addOpening = () =>
    setOpenings((o) => [
      ...o,
      { id: crypto.randomUUID(), height: 1, width: 1, count: 1 },
    ]);

  const updateOpening = (id: string, patch: Partial<Opening>) =>
    setOpenings((o) => o.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  const removeOpening = (id: string) =>
    setOpenings((o) => o.filter((x) => x.id !== id));

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="h">Высота, м</Label>
            <Input
              id="h"
              type="number"
              min={0}
              step={0.1}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value) || 0)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="w">Ширина, м</Label>
            <Input
              id="w"
              type="number"
              min={0}
              step={0.1}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Толщина кладки</Label>
          <Select value={String(thickness)} onValueChange={(v) => setThickness(Number(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {THICKNESS_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={String(o.value)}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Материал</Label>
          <Select value={material} onValueChange={(v) => setMaterial(v as MaterialType)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(MATERIALS).map(([key, m]) => (
                <SelectItem key={key} value={key}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Проёмы (окна и двери)</Label>
            <Button type="button" size="sm" variant="outline" onClick={addOpening}>
              <Plus className="mr-1 h-4 w-4" /> Добавить
            </Button>
          </div>

          {openings.length === 0 && (
            <p className="text-sm text-muted-foreground">Проёмов нет</p>
          )}

          {openings.map((o) => (
            <div key={o.id} className="grid grid-cols-[1fr_1fr_1fr_auto] items-end gap-2">
              <div className="space-y-1">
                <Label className="text-xs">Высота, м</Label>
                <Input
                  type="number"
                  min={0}
                  step={0.1}
                  value={o.height}
                  onChange={(e) => updateOpening(o.id, { height: Number(e.target.value) || 0 })}
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Ширина, м</Label>
                <Input
                  type="number"
                  min={0}
                  step={0.1}
                  value={o.width}
                  onChange={(e) => updateOpening(o.id, { width: Number(e.target.value) || 0 })}
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Кол-во</Label>
                <Input
                  type="number"
                  min={0}
                  step={1}
                  value={o.count}
                  onChange={(e) => updateOpening(o.id, { count: Number(e.target.value) || 0 })}
                />
              </div>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => removeOpening(o.id)}
                aria-label="Удалить проём"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 rounded-lg border border-border bg-background/40 p-5">
        <ResultRow label="Общая площадь стены" value={`${result.totalArea} м²`} />
        <ResultRow label="Площадь проёмов" value={`${result.openingsArea} м²`} />
        <ResultRow label="Чистая площадь кладки" value={`${result.netArea} м²`} />
        <ResultRow label="Объём кладки" value={`${result.volume} м³`} />
        <ResultRow
          label={`${MATERIALS[material].label}, штук`}
          value={result.units.toLocaleString("ru-RU")}
          strong
        />
        <ResultRow label="Раствор" value={`${result.mortarM3} м³`} />
        <ResultRow
          label="Цемент М400"
          value={`${result.cementKg} кг (${result.cementBags} мешк. по 50 кг)`}
        />
        <ResultRow label="Песок" value={`${result.sandKg} кг (~${result.sandM3} м³)`} />
      </div>
    </div>
  );
}
