const randomElement = require('./randomElement');

/*Mock index selector*/
const randomIndex = () => 0;

describe('randomElement', () => {
  it('should return an element that is a member of the array', () => {
    const array = [10, 11, 12];
    const element = randomElement(array, randomIndex);
    expect(array.includes(element)).toBe(true);
  });
  it('should return undefined for empty arrays', () => {
    expect(randomElement([], randomIndex)).toBeUndefined();
  });
});
