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
  it('should sort array in ascending order by default', () => {
    const array = [{ id: 3 }, { id: 1 }, { id: 2 }, { id: 3 }];
    const result = sortArrayByIntegerKey(array, 'id');
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }]);
  });

  it('should sort array in ascending order by default', () => {
    const array = [
      { id: 3, shortname: 'N.DJO' },
      { id: 1, shortname: 'V.WIL' },
      { id: 2, shortname: 'S.WAW' },
      { id: 4, shortname: 'S.WIL' },
    ];
    const result = sortArrayByIntegerKey(array, 'shortname');
    expect(result).toEqual([
      { id: 3, shortname: 'N.DJO' },
      { id: 2, shortname: 'S.WAW' },
      { id: 4, shortname: 'S.WIL' },
      { id: 1, shortname: 'V.WIL' },
    ]);
  });
});
