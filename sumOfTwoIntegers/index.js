/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


function toBit (value) {
  var sign = (this < 0 ? "-" : "");
  var result = Math.abs(value).toString(2);
  while(result.length < 32) {
      result = "0" + result;
  }
  return sign + result;
}

var getSum = function(a, b) {
  var sum = a ^ b;
  var carry = a & b;




  console.log(toBit(a))
  console.log(toBit(b))
  console.log(toBit(sum))
  console.log(toBit(carry))





};

console.log(getSum(2,4))
