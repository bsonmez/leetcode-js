const { buddyStrings } = require('../index');


describe('Buddy Strings', () => {
  it('Should return true if and only if we can swap two letters in A so that the result equals B.', () => {
    const A = 'aaaaaaabc';
    const B = 'aaaaaaacb';
    expect(buddyStrings(A, B)).toBeTruthy();
  });

  it('Should return true if and only if we can swap two letters in A so that the result equals B.', () => {
    const A = 'ab';
    const B = 'ba';
    expect(buddyStrings(A, B)).toBeTruthy();
  });

  it('Should return true if and only if we can swap two letters in A so that the result equals B.', () => {
    const A = 'abcd';
    const B = 'badc';
    expect(buddyStrings(A, B)).toBeFalsy();
  });
});
