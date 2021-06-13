const { removeElement } = require("../index");

describe("Remove DElement", () => {
  it("Should remove element from the array", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  });

  it("Should remove element from the array", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
