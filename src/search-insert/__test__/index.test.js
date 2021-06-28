const { searchInsert } = require("../index");

describe("Rotate", () => {
  it("Should return the index where it would be if it were inserted in order.", () => {
    let arr = [1, 3, 5, 6];
    let target = 5;
    expect(searchInsert(arr, target)).toEqual(2);
  });
  it("Should return the index where it would be if it were inserted in order.", () => {
    let arr = [1, 3, 5, 6];
    let target = 7;
    expect(searchInsert(arr, target)).toEqual(4);
  });
  it("Should return the index where it would be if it were inserted in order.", () => {
    let arr = [1, 3, 5, 6];
    let target = 0;
    expect(searchInsert(arr, target)).toEqual(0);
  });
  it("Should return the index where it would be if it were inserted in order.", () => {
    let arr = [1];
    let target = 0;
    expect(searchInsert(arr, target)).toEqual(0);
  });
});
