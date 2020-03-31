
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


function toBit(value) {
  const sign = (this < 0 ? '-' : '');
  let result = Math.abs(value).toString(2);
  while (result.length < 32) {
    result = `0${result}`;
  }
  return sign + result;
}

const getSum = function (a, b) {
  const sum = a ^ b;
  const carry = a & b;

  // console.log(toBit(a));
  // console.log(toBit(b));
  // console.log(toBit(sum));
  // console.log(toBit(carry));
  return sum + carry;
};

module.exports = { getSum };
