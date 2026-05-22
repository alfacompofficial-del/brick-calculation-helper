export function ResultRow({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-2 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={
          strong
            ? "text-lg font-semibold text-primary"
            : "font-medium text-foreground"
        }
      >
        {value}
      </span>
    </div>
  );
}
