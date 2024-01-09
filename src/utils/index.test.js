const { isNumber, sortArrayByIntegerKey } = require('./index');

describe('isNumber function', () => {
  it('should return true for a valid number', () => {
    expect(isNumber(42)).toBe(true);
  });

  it('should return false for a non-number', () => {
    expect(isNumber('not a number')).toBe(false);
  });
});

describe('sortArrayByIntegerKey function', () => {
  const array = [{ id: 3 }, { id: 1 }, { id: 2 }, { id: 3 }];

  it('should sort array in ascending order by default', () => {
    const result = sortArrayByIntegerKey(array, 'id');
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }]);
  });

  it('should sort array in descending order if asc is false', () => {
    const result = sortArrayByIntegerKey(array, 'id', false);
    expect(result).toEqual([{ id: 3 }, { id: 3 }, { id: 2 }, { id: 1 }]);
  });
});
