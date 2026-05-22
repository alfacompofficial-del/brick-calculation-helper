export function round(n: number, d: number) {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
}
