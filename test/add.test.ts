import { getPrimeFactors } from "../src/Prime";

describe("getPrimeFactors", () => {
  it("should calculate prime factors", () => {
    expect(getPrimeFactors(31)).toEqual([31]);

    expect(getPrimeFactors(2)).toEqual([2]);
    expect(getPrimeFactors(4)).toEqual([2, 2]);
    expect(getPrimeFactors(8)).toEqual([2, 2, 2]);
    expect(getPrimeFactors(9)).toEqual([3, 3]);
    expect(getPrimeFactors(12)).toEqual([2, 2, 3]);
    expect(getPrimeFactors(1)).toEqual([]);

  });
});
