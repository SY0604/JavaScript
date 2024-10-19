// Find the Largest Number: Create a function that takes an array of numbers and returns the largest one.
const findLargest = (arr) => Math.max(...arr);

const numbersArray = [1, 5, 8, 3, 10];
console.log(`The largest number in the array is: ${findLargest(numbersArray)}`);
