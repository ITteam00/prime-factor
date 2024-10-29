import { getPrimeFactors } from "../src/Factors";

describe("getPrimeFactors", () => {
  it("should Factors", () => {
    expect(getPrimeFactors(1)).toEqual([]);
  });
  it("should Factors", () => {
    expect(getPrimeFactors(4)).toEqual([2, 2]);
  });
  it("should Factors", () => {
    expect(getPrimeFactors(6)).toEqual([2, 3]);
  });
  it("should Factors", () => {
    expect(getPrimeFactors(8)).toEqual([2, 2, 2]);
  });
  it("should Factors", () => {
    expect(getPrimeFactors(20)).toEqual([2, 2, 5]);
  });
  it("should Factors", () => {
    expect(getPrimeFactors(14)).toEqual([2, 7]);
  });
});
