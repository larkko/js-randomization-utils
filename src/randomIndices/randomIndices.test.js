const randomIndices = require('./randomIndices');

/*Mock index selector*/
const randomIndex = () => 0;

describe('randomIndices', () => {
  it('should return empty array for empty array', () => {
    const indices = randomIndices([], 5, randomIndex);
    expect(indices).toEqual([]);
  });
  it('should only return valid indices', () => {
    const array = [10, 11, 12, 13, 14, 15];
    const indices = randomIndices(array, 6, randomIndex);
    indices.forEach(index => {
      expect(index).toBeLessThan(array.length);
    });
  });
  it('should only return as many indices as there are elements', () => {
    const array = [10, 11, 12];
    const moreThanExist = array.length * 2;
    const indices = randomIndices(array, moreThanExist, randomIndex);
    expect(indices.length).toEqual(array.length);
  });
  it('should only return unique indices', () => {
    const array = [10, 11, 12, 13, 14, 15];
    const indices = randomIndices(array, 6, randomIndex);
    indices.forEach((element, index) => {
      indices.forEach((other, otherIndex) => {
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
