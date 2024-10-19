// Task 12: Generate Random Number - Create a function that generates a random number between a specified range.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the minimum value: ", (min) => {
    rl.question("Enter the maximum value: ", (max) => {
        const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Random number: ${generateRandom(parseInt(min), parseInt(max))}`);
        rl.close();
    });
});
