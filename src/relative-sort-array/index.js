/* eslint-disable array-callback-return */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
let relativeSortArray = function (arr1, arr2) {
  const result = [];
  let map = {};

  // Map that how many times the number used in array
  arr1.map((index) => {
    if (!map[index]) {
      map[index] = 1;
    } else {
      map[index]++;
    }
  });

  // push the number as many as is mapped
  arr2.map((index) => {
    if (map[index]) {
      for (let i = 0; i < map[index]; i++) {
        result.push(index);
      }
    }
  });

  // get non-used numbers and sort them between
  const extras = arr1.filter((index) => !arr2.includes(index)).sort((a, b) => a - b);
  return result.concat(extras);
};

module.exports = { relativeSortArray };
