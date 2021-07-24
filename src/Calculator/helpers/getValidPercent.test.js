import { getValidPercent } from "./getValidPercent";

describe("getValidPercent", () => {
  it("works with empty string", () => {
    const result = getValidPercent("");
    const expected = "0";

    expect(result).toBe(expected);
  });

  it("removes letters", () => {
    const result = getValidPercent("error24.5");
    const expected = "24.5";

    expect(result).toBe(expected);
  });

  it("works with integer", () => {
    const result = getValidPercent("50");
    const expected = "50";

    expect(result).toBe(expected);
  });

  it("works with float", () => {
    const result = getValidPercent("45.75");
    const expected = "45.75";

    expect(result).toBe(expected);
  });

  it("works with wrong float", () => {
    const result = getValidPercent("4.5.7.5");
    const expected = "4575";

    expect(result).toBe(expected);
  });

  it("works with Russian float", () => {
    const result = getValidPercent("45,75");
    const expected = "45.75";

    expect(result).toBe(expected);
  });

  it("works with wrong Russian float", () => {
    const result = getValidPercent("4,5,7,5");
    const expected = "4575";

    expect(result).toBe(expected);
  });

  it("works with unfinished float", () => {
    const result = getValidPercent("25.");
    const expected = "25.0";

    expect(result).toBe(expected);
  });

  it("works with Russian unfinished float", () => {
    const result = getValidPercent("25,");
    const expected = "25.0";

    expect(result).toBe(expected);
  });
});
