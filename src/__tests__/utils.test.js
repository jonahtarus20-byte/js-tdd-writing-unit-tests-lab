import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it('returns true for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it('returns false for "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles uppercase and lowercase letters", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("ra$ecar")).toThrow();
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow();
  });
});
