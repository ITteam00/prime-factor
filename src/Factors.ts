export function getPrimeFactors(num: number): number[] {
  let factors: number[] = [];
  for (let item = 2; item <= num; item++) {
    while (num % item === 0) {
      factors.push(item);
      num = num/item;
    }
  }
  if(num > 1)
    factors.push(num);
  return factors;
}
