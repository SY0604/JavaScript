// Count Vowels: Write a program to count the number of vowels in a given string.
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

const stringWithVowels = "hello world";
console.log(`The number of vowels in "${stringWithVowels}" is: ${countVowels(stringWithVowels)}`);
