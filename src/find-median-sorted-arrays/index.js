/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const sort = (a, b) => {
    let arr = new Array(a.length + b.length);
    let i = 0;
    let j = 0;
    for (let k = 0; k < arr.length; k++) {
      if (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
          arr[k] = a[i];
          i++;
        } else {
          arr[k] = b[j];
          j++;
        }
      } else if (i < a.length) {
        arr[k] = a[i];
        i++;
      } else {
        arr[k] = b[j];
        j++;
      }
    }
    return arr;
  };


  const median = (arr) => {
    let len = arr.length;
    if (!len) { return 0; }
    let mid = Math.floor((len - 1) / 2);
    return (len % 2 === 1) ? arr[mid] : (arr[mid] + arr[mid + 1]) / 2;
  };


  let sorted = sort(nums1, nums2);
  return median(sorted);
};

module.exports = { findMedianSortedArrays };
