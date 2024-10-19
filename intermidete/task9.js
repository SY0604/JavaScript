// Task 9: Check Substring Presence - Write a function that checks if one string is a substring of another.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the main string: ", (mainStr) => {
    rl.question("Enter the substring to search for: ", (subStr) => {
        const isSubstring = (main, sub) => main.includes(sub);
        console.log(`${subStr} is ${isSubstring(mainStr, subStr) ? "" : "not "}a substring of ${mainStr}`);
        rl.close();
    });
});
