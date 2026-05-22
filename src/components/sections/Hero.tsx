import { Button } from "@/components/ui/button";
import { Ruler, Calculator, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60 bg-hero">
      <div className="absolute inset-0 bg-blueprint opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          <Ruler className="h-3.5 w-3.5" /> Строительные расчёты
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
          Точный расчёт материалов <span className="text-primary">за минуту</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Кладка, стяжка, штукатурка, краска, обои — введите размеры и получите расход
          материала, цемента и песка. Без таблиц и калькулятора в руках.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-elegant">
            <a href="#calculators">
              <Calculator className="mr-2 h-4 w-4" /> К калькуляторам
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#learn">
              <BookOpen className="mr-2 h-4 w-4" /> Формулы и статьи
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
