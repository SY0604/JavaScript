// Task 6: Check for Anagram - Write a function that checks whether two strings are anagrams of each other.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the first string: ", (str1) => {
    rl.question("Enter the second string: ", (str2) => {
        const areAnagrams = (s1, s2) => {
            const normalize = (s) => s.toLowerCase().split("").sort().join("");
            return normalize(s1) === normalize(s2);
        };
        console.log(`${str1} and ${str2} are ${areAnagrams(str1, str2) ? "anagrams" : "not anagrams"}`);
        rl.close();
    });
});
