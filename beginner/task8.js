// Task 8: Factorial of a Number - Write a function to calculate the factorial of a number.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a number: ", (num) => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    console.log(`Factorial of ${num} is: ${factorial(parseInt(num))}`);
    rl.close();
});
