// Ques 1 : Factorial of n
// Input:  n = 5  ----->>>>>  Output: 120

function factorial(n) {
  if (n === 0) {
    return 1;
  } else return n * factorial(n - 1);
}

console.log(factorial(5));
