/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const map = {};
  for (let n of nums) {
    const majority = nums.length / 2
    if (map[n] == null) map[n] = 0;
      map[n]++;
    if (map[n] > majority) return n;
  }
}
    


console.log(majorityElement([3,2,3,2,2]))
