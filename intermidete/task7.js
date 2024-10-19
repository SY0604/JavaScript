// Task 7: Flatten Nested Arrays - Create a function to flatten a multi-dimensional array into a single array, allowing the user to input the array.

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a nested array (e.g., [1, [2, [3, 4], 5], [6, 7]]): ", (input) => {
    try {
        // Convert the input string to an array using JSON.parse
        const nestedArray = JSON.parse(input);

        const flattenArray = (arr) => arr.flat(Infinity);

        const flattened = flattenArray(nestedArray);
        console.log("Flattened array:", flattened);
    } catch (error) {
        console.log("Invalid array format. Please enter a valid nested array.");
    }

    rl.close();
});
