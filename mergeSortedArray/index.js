/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var len = m + n;
  m--;
  n--;

  while (len--) {
      if (n < 0 || nums1[m] > nums2[n]) {
          nums1[len] = nums1[m--];
      } else {
          nums1[len] = nums2[n--];
      }

  }
return nums1
};

var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];
var m = 3
var n = 3

console.log(merge(nums1,m,nums2,n))


