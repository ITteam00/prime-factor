export function getPrimeFactors(value: number): number[] {
  const re: number[] = [];
  for (let i = 2; i < value; i++) {
    while (value % i == 0) {
      re.push(i);
      value /= i;
    }
  }
  if (value > 1) re.push(value);
  return re;
}