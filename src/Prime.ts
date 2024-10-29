export function getPrimeFactors(value: number): number[] {
  const re: number[] = [];
  while (value % 2 == 0) {
    re.push(2);
    value /= 2;
  }
  if (value % 3 == 0) {
    re.push(3);
    value /= 3;
  }

  return re;


}