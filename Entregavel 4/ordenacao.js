function Ordenacao(array) {

  function Quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var auxiliar = array[0];
  
    var ordenadoEsquerda = [];
    var desordenadoDireita = [];
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] < auxiliar) {
        ordenadoEsquerda.push(array[i]);
      } else {
        desordenadoDireita.push(array[i]);
      }
    }
  
    return Quicksort(ordenadoEsquerda).concat(
      auxiliar,
      Quicksort(desordenadoDireita)
    );
  }

  var ordenado = Quicksort(array);
  return "Array ordenado: " + ordenado;
}

module.exports = Ordenacao;