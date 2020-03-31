/**
 * @param {string} s
 * @return {boolean}
 */

const checkRecord = function (s) {
  const letters = s.split('');
  const map = {};
  let continuous = false;

  for (let i = 0; i < letters.length; i += 1) {
    const previous = letters[i - 1];
    const current = letters[i];
    const next = letters[i + 1];

    if (current === 'L' && previous === current && current === next) continuous = true;

    if (map[letters[i]] == null) map[letters[i]] = 0;
    map[letters[i]] += 1;
  }

  return !(map.A > 1 || continuous);
};

const checkRecordAlternative = function (s) {
  return s.split('A').length <= 2 && s.indexOf('LLL') === -1;
};


module.exports = { checkRecord, checkRecordAlternative };
