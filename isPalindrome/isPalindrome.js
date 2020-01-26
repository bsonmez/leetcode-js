/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n == x ? true : false 
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))


