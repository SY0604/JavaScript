// Check Palindrome: Write a function to check if a given string is a palindrome.
const isPalindrome = (str) => str === str.split('').reverse().join('');

const palindromeString = "racecar";
console.log(`Is "${palindromeString}" a palindrome? ${isPalindrome(palindromeString)}`);
