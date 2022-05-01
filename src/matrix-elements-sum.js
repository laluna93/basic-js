const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0
let matrixs = matrix[0]
let numberOne = 0
while(numberOne<matrixs.length){
      let numberTwo=0
  while(numberTwo<matrix.length){
        if(matrix[numberTwo][numberOne] !== 0){
          count +=matrix[numberTwo][numberOne]
        }else{
            break
        }
        numberTwo++
    }
    numberOne++
} 
console.log(count)
return count
}

module.exports = {
  getMatrixElementsSum
};
