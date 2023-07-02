/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let first = 0;
  let last = s.length - 1;
  let arr = s.split("");

  while (first < last) {
    while (first < last && vowels.indexOf(arr[first]) === -1) {
      first++;
    }

    while (first < last && vowels.indexOf(arr[last]) === -1) {
      last--;
    }

    [arr[first], arr[last]] = [arr[last], arr[first]];

    first++;
    last--;
  }

  return arr.join("");
};

module.exports = { reverseVowels };
