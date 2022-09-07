import sortStrings from '../solution/js/sortStrings';

describe('sortStrings() ', () => {
  test('should return a resolved promise with ASC sorted string array', async () => {
    const result = await sortStrings(['third', 'second', 'first']);

    expect(result).toEqual(['first', 'second', 'third']);
  });

  test('should return a rejected promise: "Error: Not all items in the array are strings!" if not all elements are string', async () => {
    const strArr = ['first', 'second', 'third', 11];

    const expected = new Error('Error: Not all items in the array are strings!');

    await expect(sortStrings(strArr)).rejects.toEqual(expected);
  });

  test('should return a rejected promise: "Error: Something wents wrong with sorting words!" if not all elements are string', async () => {
    const strArr = {};

    const expected = new Error('Error: Something went wrong with sorting words!');

    await expect(sortStrings(strArr)).rejects.toEqual(expected);
  });
});
