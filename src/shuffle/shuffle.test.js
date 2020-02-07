const shuffle = require('./shuffle');
const mockRandomIndex = require('../mockRandomIndex');

describe('shuffle', () => {
  it('should return an array of equal length to the input', () => {
    const array = [1,2,3,4,5];
    const shuffled = shuffle(array, mockRandomIndex);
    expect(array.length).toEqual(shuffled.length);
  });
  it('should contain the same elements as the original array', () => {
    /*The easiest way of checking this is to sort both arrays and
      see if the sorted versions match.*/
    const array = [10, 11, 12, 13, 14, 15];
    const shuffled = shuffle(array, mockRandomIndex);
    /*Sort as numbers, since javascript doesn't do that by default.*/
    const sortFunc = (a, b) => (
        (a < b) ? -1
      : (a > b) ? 1
      : 0
    );
    expect([...array].sort(sortFunc)).toEqual([...shuffled].sort(sortFunc));
  });
});
