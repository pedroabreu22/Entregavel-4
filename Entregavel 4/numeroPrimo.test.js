const NumeroPrimo = require('./numeroPrimo');

test('Teste número primo 1', () => {
  expect(NumeroPrimo(12)).toBe("12 não é um número primo");
});


test('Teste número primo 2', () => {
  expect(NumeroPrimo(7)).toBe("7 é um número primo");
});