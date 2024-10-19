// Task 1: Sum of Two Numbers - Write a function that takes two numbers and returns their sum.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        const sum = (a, b) => a + b;
        console.log(`The sum of ${num1} and ${num2} is: ${sum(parseFloat(num1), parseFloat(num2))}`);
        rl.close();
    });
});
