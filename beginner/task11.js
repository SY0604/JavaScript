// Task 11: Sum of Array Elements - Write a function that returns the sum of all elements in an array.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a list of numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);
    const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    console.log(`Sum of array elements: ${sumArray(numbers)}`);
    rl.close();
});
