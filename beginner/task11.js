// Sum of Array Elements: Write a function that returns the sum of all elements in an array.
const sumArray = (arr) => arr.reduce((sum, current) => sum + current, 0);

const arrayToSum = [1, 2, 3, 4, 5];
console.log(`The sum of the array is: ${sumArray(arrayToSum)}`);
