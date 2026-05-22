import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from "@/data/articles";
import { SectionHeading } from "./SectionHeading";

export function LearnSection() {
  return (
    <section id="learn" className="scroll-mt-20 border-b border-border/60 bg-muted/20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Обучение"
          title="Формулы и краткие гайды"
          description="Шпаргалки для самостоятельных расчётов — без воды."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card key={a.slug} className="border-border/70 transition-colors hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">{a.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{a.excerpt}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <code className="block rounded-md border border-border bg-background/60 px-3 py-2 font-mono text-xs text-primary">
                  {a.formula}
                </code>
                <p className="text-sm text-muted-foreground">{a.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
