export function getPrimeFactors(value: number): number[] {
  const re: number[] = [];
  if (value % 2 == 0) {
    re.push(2);
  }

  return re;


}