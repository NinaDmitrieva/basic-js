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
function countCats(countCats) {

  let sum = 0;
  for (let j = 0; j < countCats.length; j++) {
    for (let i = 0; i < countCats[j].length; i++) {
      if (countCats[j][i] === '^^') {
        sum++;
      }
    }
  }
  return sum;
}

module.exports = {
  countCats
};
