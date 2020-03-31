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
  let len = m + n;
  m -= 1;
  n -= 1;

  while (len -= 1) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--];
    } else {
      nums1[len] = nums2[n--];
    }
  }
  return nums1;
};


module.exports = { merge };
