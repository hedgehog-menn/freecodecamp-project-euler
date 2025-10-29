/*
TODO: Optimized version needed to handle larger inputs.
The logic is correct but fails on large numbers.

Test Cases:
[✔]1. divisibleTriangleNumber(5) should return a number.
[✔]2. divisibleTriangleNumber(5) should return 28.
[✔]3. divisibleTriangleNumber(23) should return 630.
[✔]4. divisibleTriangleNumber(167) should return 1385280.
[✖]5. divisibleTriangleNumber(374) should return 17907120.
[✖]6. divisibleTriangleNumber(500) should return 76576500.
*/

function divisibleTriangleNumber(n) {
  let current = 1;
  let position = 1;

  while (getNumOfDivisor(current) <= n) {
    position++;
    current += position;
  }

  return current;
}

function getNumOfDivisor(n) {
  if (n == 1) return 1;

  let count = 2; // skip 1 & n

  for (let i = 2; i < n; i++) {
    if (n % i == 0) count++;
  }

  return count;
}

divisibleTriangleNumber(5);
