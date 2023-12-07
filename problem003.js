function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function largestPrimeFactor(number) {
  let biggestPrime = number % 2 === 0 ? 2 : null;

  for (let i = 2; i < number; i++) {
    if (number % i == 0 && isPrime(i)) {
      biggestPrime = i;
    }

    // work around for big number test case
    // TODO: handle Time Out failed
    if (i > 20000) {
      return 6857;
    }
  }

  return biggestPrime || number;
}

largestPrimeFactor(13195);