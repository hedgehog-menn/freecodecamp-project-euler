// from Problem 3
function isPrime(num) {
  for (let i = 2; i < num; i++) {
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