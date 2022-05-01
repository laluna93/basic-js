const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let winter = 'winter'
  let spring = 'spring'
  let summer = 'summer'
  let autumn = 'autumn'

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!')
  }
  let dates = date.getMonth()
  if (dates == 11 || dates < 2) {
    return winter
  } else if (dates >= 2 && dates < 5) {
    return spring
  } else if (dates >= 5 && dates < 8) {
    return summer

  } else if (dates >= 8 && dates < 11) {
    return autumn
  }

}



module.exports = {
  getSeason
};
