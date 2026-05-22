import { createFileRoute } from "@tanstack/react-router";
import { MasonryCalculator } from "@/components/MasonryCalculator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Калькулятор кирпича, газобетона и шлакоблока" },
      {
        name: "description",
        content:
          "Онлайн-калькулятор кладки стен: рассчитайте количество кирпича, газобетона или шлакоблока, объём раствора, цемента и песка с учётом проёмов.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Калькулятор кладки стен
          </h1>
          <p className="text-muted-foreground">
            Введите размеры стены, выберите материал и толщину — получите расчёт
            материала, раствора, цемента и песка.
          </p>
        </header>
        <MasonryCalculator />
      </div>
    </main>
  );
}
