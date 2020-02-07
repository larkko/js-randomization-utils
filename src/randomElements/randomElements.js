const defaultRandomIndex = require('../defaultRandomIndex');
const randomIndices = require('../randomIndices');

/*Function for selecting up to count random elements from an array.
  The number of elements selected may be lower than count if count
  is greater than the length of the array.*/
function randomElements(array, count, randomIndex = defaultRandomIndex) {
  const indices = randomIndices(array, count, randomIndex);
  return indices.map(index => array[index]);
}

module.exports = randomElements;
