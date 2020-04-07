const { countCharacters } = require('../index');


describe('Count Characters', () => {
  it('Should count count chars', () => {
    const arr = ['dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
      'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
      'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl', 'boygirdlggnh',
      'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
      'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
      'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx', 'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
      'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo', 'oxgaskztzroxuntiwlfyufddl',
      'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
      'qnagrpfzlyrouolqquytwnwnsqnmuzphne', 'eeilfdaookieawrrbvtnqfzcricvhpiv', 'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
      'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue', 'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
      'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo', 'teyygdmmyadppuopvqdodaczob', 'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
      'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs'];
    const string = 'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp';

    expect(countCharacters(arr, string)).toBe(0);
  });

  it('Should count count chars', () => {
    const arr = ['cat', 'bt', 'hat', 'tree'];
    const string = 'atach';

    expect(countCharacters(arr, string)).toBe(6);
  });

  it('Should count count chars', () => {
    const arr = ['hello', 'world', 'leetcode'];
    const string = 'welldonehoneyr';

    expect(countCharacters(arr, string)).toBe(10);
  });

  it('Should count count chars', () => {
    const arr = ['boygirdlggnh', 'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo'];
    const string = 'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp';

    expect(countCharacters(arr, string)).toBe(0);
  });
});
