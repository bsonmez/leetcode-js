
const { strStr } = require('../index');

describe('Implement strStr()', () => {
  it('Should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {
    const needle = 'll';
    const haystack = 'hello';
    expect(strStr(haystack, needle)).toBe(2);
  });

  it('Should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {
    const needle = 'a';
    const haystack = 'a';
    expect(strStr(haystack, needle)).toBe(0);
  });

  it('Should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {
    const needle = 'a';
    const haystack = 'aaa';
    expect(strStr(haystack, needle)).toBe(0);
  });

  it('Should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {
    const needle = 'a';
    const haystack = '';
    expect(strStr(haystack, needle)).toBe(-1);
  });

  it('Should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {
    const needle = 'aa';
    const haystack = 'aaa';
    expect(strStr(haystack, needle)).toBe(0);
  });

  it('Should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {
    const needle = 'a';
    const haystack = 'mississippi';
    expect(strStr(haystack, needle)).toBe(-1);
  });
});
