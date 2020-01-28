/*Chooses a random element from the given array*/
function randomElement(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
}

module.exports = randomElement;

