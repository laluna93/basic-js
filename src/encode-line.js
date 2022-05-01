const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr2 = []
  let arr = str.split('')
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++
    } else {
      if (arr[i] < 2) {
        count = str[i]
      } else {
        arr2.push(count, arr[i])
        count = 1
      }
    }
  }
  let str2 = arr2.join('')
  let reg = str2.replace(/1/g, '')
  console.log(reg)
  return reg
}

module.exports = {
  encodeLine
};
