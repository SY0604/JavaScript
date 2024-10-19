// Count Word Occurrences: Write a function to count the occurrences of each word in a string.
const countWords = (str) => {
    const words = str.toLowerCase().split(/\s+/);
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
};

const text = "Hello world hello";
console.log(countWords(text));
