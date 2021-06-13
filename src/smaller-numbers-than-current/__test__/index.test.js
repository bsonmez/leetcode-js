const { smallerNumbersThanCurrent } = require("../index");

describe("smaller Numbers Than Current", () => {
  it("Should find", () => {
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
  });
});
