import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { CalculatorsSection } from "@/components/sections/CalculatorsSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { GadgetSection } from "@/components/sections/GadgetSection";
import { ShopSection } from "@/components/sections/ShopSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "СтройКалькулятор — расчёт материалов, обучение, магазин" },
      {
        name: "description",
        content:
          "Калькуляторы кладки, стяжки, штукатурки, краски и обоев. Формулы, концепт умного измерителя и магазин стройматериалов.",
      },
      { property: "og:title", content: "СтройКалькулятор — расчёт материалов" },
      {
        property: "og:description",
        content:
          "Считайте кирпич, газобетон, цемент, краску и обои онлайн. Гайды и магазин стройматериалов.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <CalculatorsSection />
      <LearnSection />
      <GadgetSection />
      <ShopSection />
      <SiteFooter />
      <Toaster />
    </main>
  );
}
