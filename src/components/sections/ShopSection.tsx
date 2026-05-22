import { Card, CardContent } from "@/components/ui/card";
import { Brick, Boxes, Wrench, PaintRoller, Layers, Hammer, MapPin, Phone, Clock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { icon: Brick, title: "Кирпич и блоки", text: "Керамика, газобетон, шлакоблок." },
  { icon: Boxes, title: "Цемент и смеси", text: "М400, М500, штукатурки, наливные полы." },
  { icon: Layers, title: "Изоляция", text: "Минвата, пенопласт, гидроизоляция." },
  { icon: PaintRoller, title: "Отделка", text: "Краски, обои, плитка." },
  { icon: Wrench, title: "Инструмент", text: "Ручной и электроинструмент в аренду." },
  { icon: Hammer, title: "Крепёж", text: "Анкера, саморезы, метизы оптом." },
];

export function ShopSection() {
  return (
    <section id="shop" className="scroll-mt-20 bg-muted/20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Магазин"
          title="Стройматериалы и инструмент"
          description="Шоурум с подбором материалов под ваш расчёт. Доставка по городу за 2 часа."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.title} className="border-border/70 transition-all hover:-translate-y-0.5 hover:border-primary/50">
              <CardContent className="flex items-start gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.text}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-xl border border-border bg-background/40 p-6 sm:grid-cols-3">
          <Info icon={MapPin} label="Адрес" value="ул. Строителей, 23" />
          <Info icon={Phone} label="Телефон" value="+7 (900) 000-00-00" />
          <Info icon={Clock} label="Часы" value="Пн–Сб 9:00–20:00" />
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
