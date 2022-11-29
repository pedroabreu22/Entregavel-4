function MDC(a, b) {
  
  for(let i = a; i > 0; i--) {
      if(a % i == 0 && b % i == 0) {
         return `o maior divisor comum entre ${a} e ${b} é ${i}`;
          break;
      }
  }
}

module.exports = MDC;