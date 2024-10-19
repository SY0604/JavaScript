// Task 11: Capitalize Words in a Sentence - Create a function that capitalizes the first letter of each word in a given sentence.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", (sentence) => {
    const capitalizeWords = (str) => str.replace(/\b\w/g, char => char.toUpperCase());
    console.log("Capitalized sentence:", capitalizeWords(sentence));
    rl.close();
});
