// Task 10: Generate Fibonacci Sequence - Write a function that generates the first n Fibonacci numbers.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the number of Fibonacci numbers to generate: ", (n) => {
    const generateFibonacci = (num) => {
        let fib = [0, 1];
        for (let i = 2; i < num; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib.slice(0, num);
    };
    console.log("Fibonacci sequence:", generateFibonacci(parseInt(n)));
    rl.close();
});
