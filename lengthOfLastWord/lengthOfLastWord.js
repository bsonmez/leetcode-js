/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  console.log( s.trim())
  console.log( s.trim().split(' '))
  console.log( s.trim().split(' ').pop())

  return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord('Hello World'))
// lengthOfLastWord('Hello Word')