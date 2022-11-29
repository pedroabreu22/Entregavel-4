const Fibonacci = require('./fibonacci');

test('Teste Fibonacci 1', () => {
  expect(Fibonacci(5)).toBe("0, 1, 1, 2, 3");
});


test('Teste Fibonacci 2', () => {
  expect(Fibonacci(8)).toBe("0, 1, 1, 2, 3, 5, 8, 13");
});
