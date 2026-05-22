import { Button } from "@/components/ui/button";
import { Zap, Radar, Workflow } from "lucide-react";
import { toast } from "sonner";
import gadgetImg from "@/assets/gadget.jpg";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Radar, title: "Лазерные замеры", text: "Точность ±2 мм на расстоянии до 40 м." },
  { icon: Workflow, title: "Робо-змея", text: "Доступ к труднодоступным участкам и нишам." },
  { icon: Zap, title: "Авто-передача", text: "Размеры сразу попадают в калькуляторы." },
];

export function GadgetSection() {
  return (
    <section id="gadget" className="scroll-mt-20 border-b border-border/60 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Гаджет"
            title="Умный измеритель стен"
            description="Концепт устройства, которое заменит рулетку и калькулятор: меряет, передаёт данные в приложение и сразу выдаёт расчёт материалов."
          />
          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-medium text-foreground">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.text}</div>
                </div>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="mt-8 shadow-elegant"
            onClick={() => toast.success("Спасибо! Сообщим, как только устройство будет доступно.")}
          >
            Узнать первым
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
          <img
            src={gadgetImg}
            alt="Концепт лазерного измерителя стен"
            width={1280}
            height={960}
            loading="lazy"
            className="relative w-full rounded-2xl border border-border shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
}
