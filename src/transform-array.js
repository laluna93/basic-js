const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let doubleNext = '--double-next'
  let doublePrev = '--double-prev'
  let discardPrev = '--discard-prev'
  let discardNext = '--discard-next'
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  return arr.reduce((acc, val, i, arrays) => {
    switch (val) {
      case doubleNext:
        if (arrays[i + 1]) {
          acc.push(arrays[i + 1])
        }
        break
      case doublePrev:
        if (i - 1 > 0 && typeof arrays[i - 1] == 'number') {
          acc.push(arrays[i - 1])
        }
        break
      case discardNext:
        arrays.splice(i + 1, 1)
        break
      case discardPrev:
        if (i - 1 > 0 && typeof arrays[i - 1] == 'number') {
          acc.pop()
        }
        break
      default: acc.push(val)
    }
    return acc
  }, [])
}

module.exports = {
  transform
};
