const { findRelativeRanks } = require('../index');

const testArray = [10, 3, 8, 9, 4];

describe('Find Relative Ranks', () => {
  it('Should find relatives', () => {
    expect(findRelativeRanks(testArray)).toMatchObject(['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']);
  });
});
