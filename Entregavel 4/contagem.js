function Contagem (n, nota) {

  var nota;
  var contagem = 0;
  var i = 0;
  
  while (i < n) {
      if (nota[i] >= 50) {
      contagem = contagem + 1;
    }
    i++;
  }
  return "Número de aprovações: " + contagem;
}

module.exports = Contagem;

