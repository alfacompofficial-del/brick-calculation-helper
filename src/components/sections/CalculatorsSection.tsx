import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MasonryCalculator } from "@/components/calculators/MasonryCalculator";
import { ScreedCalculator } from "@/components/calculators/ScreedCalculator";
import { PlasterCalculator } from "@/components/calculators/PlasterCalculator";
import { PaintCalculator } from "@/components/calculators/PaintCalculator";
import { WallpaperCalculator } from "@/components/calculators/WallpaperCalculator";
import { SectionHeading } from "./SectionHeading";

export function CalculatorsSection() {
  return (
    <section id="calculators" className="scroll-mt-20 border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Калькуляторы"
          title="Считаем материалы"
          description="Пять профессиональных калькуляторов — для черновой и финишной отделки."
        />

        <Card className="mt-10 border-border/70 shadow-elegant">
          <CardContent className="p-6">
            <Tabs defaultValue="masonry">
              <TabsList className="flex w-full flex-wrap justify-start gap-1 bg-muted/60">
                <TabsTrigger value="masonry">Кладка</TabsTrigger>
                <TabsTrigger value="screed">Стяжка</TabsTrigger>
                <TabsTrigger value="plaster">Штукатурка</TabsTrigger>
                <TabsTrigger value="paint">Краска</TabsTrigger>
                <TabsTrigger value="wallpaper">Обои</TabsTrigger>
              </TabsList>
              <div className="mt-6">
                <TabsContent value="masonry"><MasonryCalculator /></TabsContent>
                <TabsContent value="screed"><ScreedCalculator /></TabsContent>
                <TabsContent value="plaster"><PlasterCalculator /></TabsContent>
                <TabsContent value="paint"><PaintCalculator /></TabsContent>
                <TabsContent value="wallpaper"><WallpaperCalculator /></TabsContent>
              </div>
            </Tabs>

            <div className="mt-6 rounded-md border border-primary/20 bg-primary/5 p-3 text-sm text-muted-foreground">
              Рекомендуем закупить с запасом <span className="font-medium text-primary">+10%</span> на отходы и подрезку.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
