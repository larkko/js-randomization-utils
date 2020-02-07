const randomElement = require('./randomElement');
const mockRandomIndex = require('../mockRandomIndex');

describe('randomElement', () => {
  it('should return an element that is a member of the array', () => {
    const array = [10, 11, 12];
    const element = randomElement(array, mockRandomIndex);
    expect(array.includes(element)).toBe(true);
  });
  it('should return undefined for empty arrays', () => {
    expect(randomElement([], mockRandomIndex)).toBeUndefined();
  });
});
