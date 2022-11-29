const Ordenacao = require('./ordenacao');

test('Teste ordenação 1', () => {
  expect(Ordenacao([12, 21, 10])).toBe("Array ordenado: 10,12,21");
});


test('Teste ordenação 2', () => {
  expect(Ordenacao([5, 2, 256, 18])).toBe("Array ordenado: 2,5,18,256");
});