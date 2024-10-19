// Remove Duplicates from Array: Write a function that removes duplicate values from an array.
const removeDuplicates = (arr) => [...new Set(arr)];

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(`Array without duplicates: ${removeDuplicates(arrayWithDuplicates)}`);
