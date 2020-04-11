const { luckyNumbers, luckyNumbersAlternative } = require('../index');


describe('Lucky Numbers In Matix', () => {
  it('Should the luckiest number in matrix', () => {
    let matrix = [
      [1, 10, 4, 2],
      [9, 3, 8, 7],
      [15, 16, 17, 12],
    ];
    expect(luckyNumbers(matrix)).toEqual([12]);
    expect(luckyNumbersAlternative(matrix)).toEqual([12]);
  });

  it('Should the luckiest number in matrix', () => {
    let matrix = [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ];
    expect(luckyNumbers(matrix)).toEqual([15]);
    expect(luckyNumbersAlternative(matrix)).toEqual([15]);
  });

  it('Should the luckiest number in matrix', () => {
    let matrix = [
      [1, 10, 4, 2],
      [9, 3, 8, 7],
      [15, 16, 17, 12],
    ];
    expect(luckyNumbers(matrix)).toEqual([12]);
    expect(luckyNumbersAlternative(matrix)).toEqual([12]);
  });

  it('Should the luckiest number in matrix', () => {
    let matrix = [
      [7, 8],
      [1, 2],
    ];
    expect(luckyNumbers(matrix)).toEqual([7]);
    expect(luckyNumbersAlternative(matrix)).toEqual([7]);
  });

  it('Should the luckiest number in matrix', () => {
    let matrix = [
      [36376, 85652, 21002, 4510],
      [68246, 64237, 42962, 9974],
      [32768, 97721, 47338, 5841],
      [55103, 18179, 79062, 46542],
    ];
    expect(luckyNumbers(matrix)).toEqual([]);
    expect(luckyNumbersAlternative(matrix)).toEqual([]);
  });
});
