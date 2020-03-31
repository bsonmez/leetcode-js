const { detectCapitalUse } = require('../index');

describe('Detect Capital Use', () => {
  it('Should be detectCapitalUse true', () => {
    expect(detectCapitalUse('HEY')).toBeTruthy();
  });

  it('Should be detectCapitalUse true', () => {
    expect(detectCapitalUse('Turkey')).toBeTruthy();
  });

  it('Should be detectCapitalUse false', () => {
    expect(detectCapitalUse('FalSe')).toBeFalsy();
  });
});
