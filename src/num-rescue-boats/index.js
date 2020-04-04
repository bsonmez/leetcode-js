/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let j = people.length - 1;
  let boats = 0;
  for (let i = 0; i <= j; ++boats) {
    people[j--] + people[i] <= limit && ++i;
  }
  return boats;
};

module.exports = { numRescueBoats };
