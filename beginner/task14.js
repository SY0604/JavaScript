// Task 14: Remove Duplicates from Array - Write a function that removes duplicate values from an array.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a list of numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);
    const removeDuplicates = (arr) => [...new Set(arr)];
    console.log(`Array without duplicates: ${removeDuplicates(numbers).join(" ")}`);
    rl.close();
});
