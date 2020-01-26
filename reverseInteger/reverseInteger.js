/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const limit = 2147483648;
  var sign = Math.sign(x) 
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
 return n > limit ? 0 : n * sign
};

console.log(reverse(1534236469))