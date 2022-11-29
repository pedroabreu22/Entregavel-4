function Fibonacci (n) {
    var a = 0;
    var b = 1;
    var i = 2;
    var c;
    var result = 0
    if (n == 1) {
      result = a;
    } else {
      result = a + ', ' + b;
    }

    while (n > i) {
      i = i + 1;
      c = a + b;
      result += ', ' + c;
      a = b;
      b = c;
    }

    return result;
}

module.exports = Fibonacci;