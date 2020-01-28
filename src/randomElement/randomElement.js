const defaultRandomIndex = require('../defaultRandomIndex');

/*Chooses a random element from the given array*/
function randomElement(array, randomIndex = defaultRandomIndex) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[randomIndex(array)];
  }
}

module.exports = randomElement;

