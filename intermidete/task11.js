// Capitalize Words in a Sentence: Create a function that capitalizes the first letter of each word in a given sentence.
const capitalizeWords = (sentence) => sentence.replace(/\b\w/g, char => char.toUpperCase());

const sentence = "hello world from javascript";
console.log(`Capitalized: ${capitalizeWords(sentence)}`);
