import { getValidPercent } from "./getValidPercent";

describe("getValidPercent", () => {
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

  it("works with Russian float", () => {
    const result = getValidPercent("45,75");
    const expected = "45.75";

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
