export function getPrimeFactors(value: number): number[] {
  let re: number[] = [];
  const primes: number[] = [
    2, 3, 5, 7
  ];

  while (value != 1) {
    let flag = false;
    for (let i = 0; i < primes.length; i++) {
      if (value % primes[i] == 0) {
        re.push(primes[i]);
        value /= primes[i];
        flag = true;
      }
    }
    if (flag == false) {
      re.push(value);
      break;
    }
  }
  re.sort();
  return re;
}