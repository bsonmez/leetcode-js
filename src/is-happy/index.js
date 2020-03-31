/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (nums) {
  let total;
  let arr = nums;
  arr = arr.toString().split('');
  const history = [];

  do {
    total = 0;
    for (const num of arr) {
      total += parseInt(num) * parseInt(num);
    }
    // Check previous numbers, if it exists then its a loop
    if (history.includes(total)) return false;

    history.push(total);
    arr = total.toString().split('');
  } while (total !== 1);

  return true;
};

module.exports = { isHappy };
