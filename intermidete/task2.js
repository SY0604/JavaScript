// Task 2: Validate Email Format - Write a function to check if an email address is valid using regular expressions.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter an email address: ", (email) => {
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    console.log(`The email address is ${isValidEmail(email) ? "valid" : "invalid"}`);
    rl.close();
});
