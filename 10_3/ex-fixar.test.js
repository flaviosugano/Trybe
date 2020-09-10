// let randomNumber = () => { 
//   return (1 + Math.floor((Math.random()*100)));
// }

// const isDivisible = (number) => (randomNumber() % number) === 0;

const ex = require('./ex-fixar-func');

test('randomNumber() is called', () => {
  ex.randomNumber = jest.fn();

  ex.isDivisible();
  expect(ex.randomNumber).toBeCalled();
})

test('isDivisible() works properly', () => {
  ex.randomNumber = jest.fn().mockReturnValue(4);

  expect(ex.isDivisible(2)).toBe(true);
  expect(ex.isDivisible(3)).toBe(false);
  expect(ex.isDivisible(4)).toBe(true);
  expect(ex.isDivisible(5)).not.toBe(true);
})