// Check if a Number is Even or Odd: Write a function to check if a given number is even or odd.
const isEvenOrOdd = (num) => num % 2 === 0 ? "Even" : "Odd";

const numberToCheck = 7;
console.log(`${numberToCheck} is: ${isEvenOrOdd(numberToCheck)}`);
