// Task 4: Count Word Occurrences - Write a function to count the occurrences of each word in a string.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", (sentence) => {
    const countWords = (str) => {
        const words = str.toLowerCase().split(/\s+/);
        return words.reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {});
    };
    console.log("Word occurrences:", countWords(sentence));
    rl.close();
});
