const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let disks = (2 ** disksNumber) - 1
  let result = Math.floor(disks / (turnsSpeed / 3600))
  console.log(disks, result)
  let tower = {
    seconds: result,
    turns: disks
  }
  console.log(tower)
  return tower
}

module.exports = {
  calculateHanoi
};
