function fiboEvenSum(n) {

  let first = 1;
  let second = 2;

  let sum = 0;

  do {
    if (second % 2 === 0) {
      sum += second;
    }

    const temp = first + second;
    first = second;
    second = temp;

  } while (second <= n)

  return sum;
}
