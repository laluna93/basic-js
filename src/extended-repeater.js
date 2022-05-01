const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let {
    separator = '+',
    additionSeparator = '|',
    addition = '',
    additionRepeatTimes = 1,
    repeatTimes = 1

  } = options

  let arrOne = []
  let arrTwo = []
  let res;
  let results;
  while (additionRepeatTimes > 0) {
    arrOne.push(String(addition))
    additionRepeatTimes--
  }
  res = str + arrOne.join(additionSeparator)

  while (repeatTimes > 0) {
    arrTwo.push(res)
    repeatTimes--
  }
  results = arrTwo.join(separator)
  console.log(results)

  return results

}

module.exports = {
  repeater
};
