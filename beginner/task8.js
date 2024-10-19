// Factorial of a Number: Write a function to calculate the factorial of a number.
const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);

const numberForFactorial = 5;
console.log(`The factorial of ${numberForFactorial} is: ${factorial(numberForFactorial)}`);
