function NumeroPrimo (n) {
  var serPrimo = true;
  
  if (n === 1 || n === 2) {
      return `${n} é um número primo`;
  } else if (n > 1) {
  
      for (var i = 2; i < n; i++) {
          if (n % i == 0) {
              serPrimo = false;
              break;
          }
      }
  
      if (serPrimo) {
          return `${n} é um número primo`;
      } else {
          return `${n} não é um número primo`;
      }
  } else {
      return `${n} não é um número primo`;
  }
}

module.exports = NumeroPrimo;