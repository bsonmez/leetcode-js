const { checkStraightLine } = require("../index");

describe("Single Number", () => {
  it("Should points make a straight line in the XY plane.", () => {
    const coordinates = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ];
    expect(checkStraightLine(coordinates)).toBeTruthy();
  });

  it("Should Not points make a straight line in the XY plane.", () => {
    const coordinates = [
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 7],
    ];
    expect(checkStraightLine(coordinates)).toBeFalsy();
  });

  it("Should points make a straight line in the XY plane with negative numbers", () => {
    const coordinates = [
      [0, 0],
      [0, 1],
      [0, -1],
    ];
    expect(checkStraightLine(coordinates)).toBeTruthy();
  });

  it("Should points make a straight line in the XY plane with positive numbers", () => {
    const coordinates = [
      [2, 1],
      [4, 2],
      [6, 3],
    ];
    expect(checkStraightLine(coordinates)).toBeTruthy();
  });
});
