const exec = require('./pontos');


test('pontos exec', () => {
  expect(exec(1, 1,4,5)).toBe(5);
});

