const randomElements = require('./randomElements');
const mockRandomIndex = require('../mockRandomIndex');

describe('randomElements', () => {
  it('should return empty array for empty array', () => {
    const elements = randomElements([], 5, mockRandomIndex);
    expect(elements).toEqual([]);
  });
  it('should only return as many elements as there are in the array', () => {
    const array = [10, 11, 12];
    const moreThanExist = array.length * 2;
    const elements = randomElements(array, moreThanExist, mockRandomIndex);
    expect(elements.length).toEqual(array.length);
  });
  it('should only return separate elements', () => {
    /*Each member of this array is unique, to make it possible to check
      whether any member of the array was selected twice.*/
    const array = [10, 11, 12, 13, 14, 15];
    const elements = randomElements(array, 6, mockRandomIndex);
    elements.forEach((element, index) => {
      elements.forEach((other, otherIndex) => {
        /*Only relevant if not the same element, which is the case
          if the index is the same.*/
        const differentElement = index !== otherIndex;
        if (differentElement) {
          expect(element).not.toEqual(other);
        }
      });
    });
  });
});
