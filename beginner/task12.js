// Generate Random Number: Create a function that generates a random number between a specified range.
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const min = 1;
const max = 100;
console.log(`Random number between ${min} and ${max}: ${randomNumber(min, max)}`);
