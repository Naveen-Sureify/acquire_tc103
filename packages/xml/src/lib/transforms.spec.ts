import * as transforms from './transforms';

describe('transforms', () => {
  it.skip('concat', () => {
    expect(transforms.concat(' ', 'John', 'Doe')).toEqual('John Doe');
    expect(transforms.concat('', 'John', 'Doe')).toEqual('JohnDoe');
  });

  it.skip('interpolate', () => {
    expect(
      transforms.interpolate('my ${my.value} is here!', {
        my: {
          value: 'variable',
        },
      })
    ).toEqual('my variable is here!');
  });


  it.skip('dobToAge', () => {
    expect(transforms.dobToAge('2000/12/12')).toEqual(22);
    expect(transforms.dobToAge('1969-12-12')).toEqual(53);
    expect(transforms.dobToAge('12-12-1969')).toEqual(53);
  });

  it.skip('heightToInches', () => {
    expect(transforms.heightToInches('5', '5')).toEqual(65);
    expect(transforms.heightToInches('7', '2')).toEqual(86);
  });
});
