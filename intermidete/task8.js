// Task 8: Get Unique Values from Array - Write a function that returns an array with only the unique values from a list.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a list of numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);
    const getUniqueValues = (arr) => [...new Set(arr)];
    console.log("Unique values:", getUniqueValues(numbers));
    rl.close();
});
