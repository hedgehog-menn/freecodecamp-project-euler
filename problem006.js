function sumSquareDifference(n) {
  let sumEachSq = 0;
  let sumThenSq = 0;

  for (let i = 1; i <= n; i++) {
    sumEachSq += i ** 2;
    sumThenSq += i;
  }

  sumThenSq = sumThenSq ** 2;

  return sumThenSq - sumEachSq;
}

sumSquareDifference(100);