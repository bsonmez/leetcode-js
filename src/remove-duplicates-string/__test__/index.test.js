const { removeDuplicates } = require('../index');

describe('Remove Duplicates Strings', () => {
  it('Should be remove duplicated strings and return non-duplicated', () => {
    expect(removeDuplicates('abbaca')).toEqual('ca');
  });

  it('Should be remove duplicated strings and return non-duplicated', () => {
    expect(removeDuplicates('azxxzy')).toEqual('ay');
  });

  it('Should be remove duplicated strings and return NOT non-duplicated', () => {
    expect(removeDuplicates('aabbccx')).not.toEqual('a');
  });

  it('Should be remove duplicated strings and return empty', () => {
    expect(removeDuplicates('aabbcc')).toEqual('');
  });
});
