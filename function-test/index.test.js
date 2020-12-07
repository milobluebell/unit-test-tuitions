import { hasProperty, arrayUnique } from '.';

// 
describe('🧪  hasProperty', function () {

  it('run correctly', function () {

    const tester = {
      key: 'value',
      key2: 'value2',
    };

    expect(hasProperty('key', tester)).toBe(true);
    expect(hasProperty('key3', tester)).not.toBe(true);
  });

});

//
describe('🧪 arrayUnique', function () {

  it('run correctly', function () {

    const originArray = [1, 1, 2, 2, 3, 3, 4, 4];
    const resultArray = [1, 2, 3, 4]

    expect(arrayUnique(originArray)).toEqual(resultArray);

  });

});