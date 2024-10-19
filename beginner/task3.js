// Task 3: Check if a Number is Even or Odd - Write a function to check if a given number is even or odd.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a number: ", (num) => {
    const isEven = (n) => n % 2 === 0;
    console.log(`${num} is ${isEven(parseInt(num)) ? "even" : "odd"}`);
    rl.close();
});
