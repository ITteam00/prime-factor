import { getPrimeFactors } from "../src/Prime";

describe("getPrimeFactors", () => {
  it("should calculate prime factors", () => {
    expect(getPrimeFactors(1)).toEqual([]);
    expect(getPrimeFactors(2)).toEqual([2]);


  });
});
