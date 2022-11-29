const MDC = require('./mdc');

test('Teste MDC 1', () => {
  expect(MDC(2, 6)).toBe("o maior divisor comum entre 2 e 6 é 2");
});


test('Teste MDC 2', () => {
  expect(MDC(10, 25)).toBe("o maior divisor comum entre 10 e 25 é 5");
});