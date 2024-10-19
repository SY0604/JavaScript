// Task 7: Count Vowels - Write a program to count the number of vowels in a given string.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", (str) => {
    const countVowels = (s) => s.match(/[aeiou]/gi)?.length || 0;
    console.log(`Number of vowels: ${countVowels(str)}`);
    rl.close();
});
