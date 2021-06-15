const { kLengthApart } = require("../index");

describe("Find k Length", () => {
  it("Should return true", () => {
    expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toBeTruthy();
    expect(kLengthApart([1, 1, 1, 1, 1], 0)).toBeTruthy();
    expect(kLengthApart([0, 1, 0, 1], 1)).toBeTruthy();
  });

  it("Should return false", () => {
    expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toBeFalsy();
    expect(kLengthApart([1, 1, 0, 1, 1, 1], 2)).toBeFalsy();
  });
});
