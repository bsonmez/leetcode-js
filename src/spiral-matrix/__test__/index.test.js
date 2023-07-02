const { spiralOrder } = require("../index");

describe("spiralOrder", () => {
  it("should return an empty array if the matrix is empty", () => {
    expect(spiralOrder([])).toEqual([]);
  });
  it("should return the correct spiral order for a 1x1 matrix", () => {
    expect(spiralOrder([[1]])).toEqual([1]);
  });
  it("should return the correct spiral order for a 2x2 matrix", () => {
    expect(
      spiralOrder([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([1, 2, 4, 3]);
  });
  it("should return the correct spiral order for a 3x3 matrix", () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([1, 2, 3, 6, 5, 4]);
  });
  it("should return the correct spiral order for a 3x4 matrix", () => {
    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ])
    ).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
  });
});
