const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members)){
    let arr =[]
  for(let i of members) { 
    if(typeof(i)=='string'){
 arr.push(i.trim()[0].toUpperCase())
    }
  }
  let str = arr.sort().join('')
  return str
  }else{
    return false
  }
}

module.exports = {
  createDreamTeam
};
