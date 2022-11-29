const Contagem = require('./contagem');

test('Teste contagem 1', () => {
  expect(Contagem(3, [20, 60, 80])).toBe("Número de aprovações: 2");
});


test('Teste contagem 2', () => {
  expect(Contagem(5, [10, 20, 80, 100, 90])).toBe("Número de aprovações: 3");
});
