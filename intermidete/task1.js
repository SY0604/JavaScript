// Task 1: Sort an Array of Numbers - Implement a sorting algorithm (using a built-in method) to sort an array.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a list of numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);
    const sortedArray = (arr) => arr.sort((a, b) => a - b);
    console.log(`Sorted array: ${sortedArray(numbers).join(" ")}`);
    rl.close();
});
