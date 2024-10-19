// Reverse a String: Create a function that takes a string and returns it in reverse.
const reverseString = (str) => str.split('').reverse().join('');

const stringToReverse = "hello";
console.log(`The reverse of "${stringToReverse}" is: "${reverseString(stringToReverse)}"`);
