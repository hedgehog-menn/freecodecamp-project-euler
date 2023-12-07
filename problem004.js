function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

function largestPalindromeProduct(n) {

  const maxNumDigit = (10 ** n) - 1;
  let largestPalindrome = 0;

  for (let i = maxNumDigit; i > 0; i--) {
    for (let j = maxNumDigit; j > 0; j--) {
      const multi = i * j;
      if (isPalindrome(multi) && multi > largestPalindrome) {
        largestPalindrome = multi;
      }
    }
  }

  return largestPalindrome;
}

largestPalindromeProduct(3);