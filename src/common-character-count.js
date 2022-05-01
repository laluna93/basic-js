const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counts = 0;
  if (s1.length < 1) {
    counts = 0
  }
  let arrs = s1.split('')
  let arrs2 = s2.split('')
  for (i of arrs) {
    if (arrs2.includes(i)) {
      counts++
      arrs2.splice(arrs2.indexOf(i), 1)
    }
  }
  console.log(counts)
  return counts
}

module.exports = {
  getCommonCharacterCount
};
