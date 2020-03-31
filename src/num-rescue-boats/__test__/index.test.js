const { numRescueBoats } = require('../index');

describe('Number of Rescue Boats', () => {
  it('Should find number of rescue boats', () => {
    const firstCasePeople = [3, 2, 2, 1];
    const firstCaselimit = 3;
    expect(numRescueBoats(firstCasePeople, firstCaselimit)).toBe(3);
  });

  it('Should find number of rescue boats', () => {
    const secondCasePeople = [1, 2];
    const secondCaselimit = 3;
    expect(numRescueBoats(secondCasePeople, secondCaselimit)).toBe(1);
  });

  it('Should find number of rescue boats', () => {
    const thirdCasePeople = [3, 5, 3, 4];
    const thirdCaselimit = 5;

    expect(numRescueBoats(thirdCasePeople, thirdCaselimit)).toBe(4);
  });
});
