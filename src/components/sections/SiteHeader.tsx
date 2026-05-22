import { Hammer } from "lucide-react";

const links = [
  { href: "#calculators", label: "Калькуляторы" },
  { href: "#learn", label: "Обучение" },
  { href: "#gadget", label: "Гаджет" },
  { href: "#shop", label: "Магазин" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Hammer className="h-4 w-4" />
          </span>
          <span>СтройКалькулятор</span>
        </a>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
