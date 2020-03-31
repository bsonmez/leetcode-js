const { checkPossibility } = require('../index');

const testArrayOne = [4, 2, 3];
const testArrayTwo = [4, 2, 1];


describe('Check Possibility', () => {
  it('Should checkPossibility True', () => {
    expect(checkPossibility(testArrayOne)).toBeTruthy();
  });

  it('Should checkPossibility False', () => {
    expect(checkPossibility(testArrayTwo)).toBeFalsy();
  });
});
