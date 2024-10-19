// Task 2: Reverse a String - Create a function that takes a string and returns it in reverse.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", (str) => {
    const reverseString = (s) => s.split("").reverse().join("");
    console.log(`Reversed string: ${reverseString(str)}`);
    rl.close();
});
