import convertToUppercase from '../solution/js/convertToUppercase';

describe('convertToUppercase() ', () => {
  test('should return a resolved promise with uppercase string array', async () => {
    const strArr = ['first', 'second', 'third'];
    const expected = ['FIRST', 'SECOND', 'THIRD'];

    const result = await convertToUppercase(strArr);

    expect(result).toEqual(expected);
  });

  test('should return a rejected promise: "Error: Not all items in the array are strings!" if converting cause any error', async () => {
    const strArr = ['first', 'second', 'third', 11];
    const expected = new Error('Error: Not all items in the array are strings!');

    await expect(convertToUppercase(strArr)).rejects.toEqual(expected);
  });
});
