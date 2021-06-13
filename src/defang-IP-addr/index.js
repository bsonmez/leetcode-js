/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

module.exports = { defangIPaddr };
