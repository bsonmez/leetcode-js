/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(x) {
  const n = String(x).split('').reverse().join('');
  var converted = String(parseInt(n,2))
  return  Number(converted)
};

console.log("TCL: ", reverseBits(00000010100101000001111010011100))
