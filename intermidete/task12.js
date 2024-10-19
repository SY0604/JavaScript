// Task 12: Find Intersection of Two Arrays - Write a function that returns the common elements between two arrays.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the first array of numbers separated by spaces: ", (arr1) => {
    rl.question("Enter the second array of numbers separated by spaces: ", (arr2) => {
        const array1 = arr1.split(" ").map(Number);
        const array2 = arr2.split(" ").map(Number);
        const intersection = (a, b) => a.filter(value => b.includes(value));
        console.log("Intersection of arrays:", intersection(array1, array2));
        rl.close();
    });
});
