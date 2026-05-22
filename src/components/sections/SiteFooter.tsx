export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} СтройКалькулятор. Считаем материалы — экономим бюджет.
      </div>
    </footer>
  );
}
