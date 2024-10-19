// Task 5: Find the Largest Number - Create a function that takes an array of numbers and returns the largest one.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a list of numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);
    const largestNumber = (arr) => Math.max(...arr);
    console.log(`The largest number is: ${largestNumber(numbers)}`);
    rl.close();
});
