import { getPrimeFactors } from "../src/add";

describe("getPrimeFactors", () => {
  it("should get PrimeFactors[2,2] when input 4", () => {
    expect(getPrimeFactors(4)).toEqual([2, 2]);
  });
});

describe("getPrimeFactors", () => {
  it("should get PrimeFactors[2,3] when input 6", () => {
    expect(getPrimeFactors(6)).toEqual([2, 3]);
  });
});

describe("getPrimeFactors", () => {
  it("should get PrimeFactors[2,2,5] when input 20", () => {
    expect(getPrimeFactors(20)).toEqual([2, 2, 5]);
  });
});

describe("getPrimeFactors", () => {
  it("should get PrimeFactors[] when input 1", () => {
    expect(getPrimeFactors(1)).toEqual([]);
  });
});

describe("getPrimeFactors", () => {
  it("should get PrimeFactors[83] when input 83", () => {
    expect(getPrimeFactors(83)).toEqual([83]);
  });
});
