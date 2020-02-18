/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let i = 0;
  var j = 0;

  while (i < chars.length) {
      if (chars[j] === chars[i]) {
          j++;
      } else if (j > i + 1) {
          const count = (j - i).toString().split('');
          chars.splice(i + 1, j - i - 1, ...count);
          j = i = i + 1 + count.length;
      } else if (j = i + 1) {
          i = j;
          j++;
      }
  }

  return chars.length;
};

console.log(compress(["a","a","b","b","c","c","c"]))
