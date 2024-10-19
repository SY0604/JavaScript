// Get Unique Values from Array: Write a function that returns an array with only the unique values from a list.
const getUniqueValues = (arr) => [...new Set(arr)];

const values = [1, 2, 2, 3, 4, 4, 5];
console.log(`Unique values: ${getUniqueValues(values)}`);
