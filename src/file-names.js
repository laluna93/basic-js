const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counts = 1
  let arr = []
  for (let i = 0; i < names.length; i++) {
    let name = names[i]
    if (!arr.includes(name) > 0) {
      arr.push(name)
    } else {
      let str = arr.includes(name + '(' + counts + ')')
      for (let i = 0; i < str; i++) {
        counts++
      }
      let arr2 = name + '(' + counts + ')'
      arr.push(arr2)
    }
  };
  console.log(arr)
  return arr
}

module.exports = {
  renameFiles
};
