function range(max) {
  const arr = [];
  for (var i = 1; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMult(n) {
  // from stackoverflow
  let multiple = 1;
  range(n).forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}

smallestMult(20);