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
    if (Array.isArray(members)) {
      const letterName = members.map((item) => {
        if (typeof item === 'string') {
          return item.trim().toLocaleUpperCase()
        } else if (typeof item !== 'string') {
          return false
        }
      })
      if ((letterName.length !== 0) && !letterName.includes(undefined)) {
        letterName.push.item
        return str = letterName.map(a => a[0]).sort().join('')
      } else return false
    } else return false
}

module.exports = {
  createDreamTeam
};
