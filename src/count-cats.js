const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counts = 0;
  for (let i of matrix) {
    for (let j of i) {
      if (j === '^^') {
        counts++
      }
    }
  }
  console.log(counts)
  return counts
}

module.exports = {
  countCats
};
