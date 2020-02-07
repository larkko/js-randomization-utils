const defaultRandomIndex = require('../defaultRandomIndex');
const randomElement = require('../randomElement');

/*Randomly selects indices which can be used to access elements in the
  provided array. The maximum number of indices is specified via
  the count parameter. Fewer indices can be returned if count
  is greater than the length of the array.
  All the indices returned by this function are unique.*/
function randomIndices(array, count, randomIndex = defaultRandomIndex) {
  let indices = array.map((element, index) => index);
  let left = count;
  const result = [];
  while (left > 0 && indices.length > 0) {
    const selected = randomElement(indices, randomIndex);
    result.push(selected);
    indices = indices.filter(i => i !== selected);
    --left;
  }
  return result;
}

module.exports = randomIndices;
