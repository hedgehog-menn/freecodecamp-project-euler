// from Problem 3
function isPrime(num, begin = 2) {
  if (num === 2) {
    return true;
  }
  for (let i = begin; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function nthPrime(n) {
  let latestPrime = null;
  let latestPosition = 0;

  for (let i = 2; latestPosition < n; i++) {
    if (isPrime(i)) {
      latestPrime = i;
      latestPosition += 1;
    }
  }

  return latestPrime;
}

nthPrime(10001);