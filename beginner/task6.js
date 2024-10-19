// Task 6: Check Palindrome - Write a function to check if a given string is a palindrome.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", (str) => {
    const isPalindrome = (s) => s === s.split("").reverse().join("");
    console.log(`${str} is ${isPalindrome(str) ? "a palindrome" : "not a palindrome"}`);
    rl.close();
});
