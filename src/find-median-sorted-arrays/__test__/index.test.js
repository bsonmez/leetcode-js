const { findMedianSortedArrays } = require('../index');

describe('Find Median Sorted Arrays', () => {
  it('Should find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2);
  });

  it('Should find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5);
  });

  it('Should find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))', () => {
    const nums1 = [1, 2, 6];
    const nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(3);
  });

  it('Should find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))', () => {
    const nums1 = [1, 2, 6, 9];
    const nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(3.5);
  });
});
