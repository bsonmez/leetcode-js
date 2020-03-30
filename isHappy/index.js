/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(nums) {
  let total;
  nums = nums.toString().split('')
  let history = []

  do{
    total = 0
    for(let num of nums){
      total += parseInt(num) * parseInt(num)
    }
    // Check previous numbers, if it exists then its a loop
    if(history.includes(total)) return false

    history.push(total)
    nums = total.toString().split('')
  }while(total != 1)

  return true
};

console.log(isHappy(19))