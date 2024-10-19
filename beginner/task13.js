// Task 13: Convert a Number to a String - Write a function to convert a number to its string representation.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a number: ", (num) => {
    const numberToString = (n) => n.toString();
    console.log(`String output: ${numberToString(parseFloat(num))}`);
    rl.close();
});
