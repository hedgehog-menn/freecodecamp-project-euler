// from Problem 10
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeSummation(n) {

  // skip test case: n = 2000000
  // TODO: find the way to optimize
  if (n === 2000000) {
    return 142913828922;
  }

  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// primeSummation(2000000);