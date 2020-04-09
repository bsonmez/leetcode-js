/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  while (j < n) {
    if (i < m && nums1[i] <= nums2[j]) {
      i++;
    } else {
      for (let k = nums1.length - 1; k > i; k--) {
        nums1[k] = nums1[k - 1];
      }
      nums1[i] = nums2[j];
      j++;
      i++;
      m++;
    }
  }
  return nums1;
};

module.exports = { merge };
