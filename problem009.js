function specialPythagoreanTriplet(n) {

  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      const c = n - a - b;
      if (c ** 2 === a ** 2 + b ** 2) {
        return a * b * c;
      }
    }
  }

  return true;
}

specialPythagoreanTriplet(1000);