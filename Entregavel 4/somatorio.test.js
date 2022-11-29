const Somatorio = require('./somatorio');

test('Teste somatório 1', () => {
  expect(Somatorio(2, [5, 26])).toBe("Soma = 31");
});


test('Teste somatório 2', () => {
  expect(Somatorio(4, [1, 2, 3, 4])).toBe("Soma = 10");
});