const defaultRandomIndex = require('../defaultRandomIndex');
const randomElements = require('../randomElements');

/*Returns a shuffled version of an array*/
function shuffle(array, randomIndex = defaultRandomIndex) {
  return randomElements(array, array.length, randomIndex);
}

module.exports = shuffle;
