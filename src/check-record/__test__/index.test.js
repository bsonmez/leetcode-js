const { checkRecord, checkRecordAlternative } = require('../index');

describe('Check Record', () => {
  it('Should checkRecord true', () => {
    expect(checkRecord('LLPPPLL')).toBeTruthy();
  });

  it('Should checkRecord true', () => {
    expect(checkRecordAlternative('LLPPPLL')).toBeTruthy();
  });
});
