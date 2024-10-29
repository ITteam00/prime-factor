export function getPrimeFactors(a: number): number[] {
  let nums: number[] = [];
  let i = 2;
  while (i * i <= a) {
    while (a % i === 0) {
      nums.push(i);
      a = a / i;
    }
    i++;
  }
  if (a > 1) {
    nums.push(a);
  }
  return nums;
}
