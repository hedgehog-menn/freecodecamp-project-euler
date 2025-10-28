function isPrime(num, begin = 2) {
  if (num === 2) {
    return true;
  }

  for (let i = begin; i < num; i++) {
    if (num % 2 !== 0 && num % i === 0) {
      return false;
    }
  }

  return true;
}

function largestPrimeFactor(number) {
  let bufNum = number;
  let biggestPrime = 2;

  for (let i = 3; i <= bufNum; i++) {
    if (bufNum % 2 !== 0 && bufNum % i == 0 && isPrime(i, bufNum)) {
      if (i > biggestPrime) {
        biggestPrime = i;
      }

      // handle big number, reduce its size
      bufNum = bufNum / biggestPrime;
    }
  }

  return biggestPrime;
}

largestPrimeFactor(13195);