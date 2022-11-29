function Somatorio(quantidadeNumeros, numeros) {
  var soma = 0;
  
  for (var i = 0; i < quantidadeNumeros; i++) {
    var A = numeros[i];
    soma += A;
  }
  
  return "Soma = " + soma;
}

module.exports = Somatorio;