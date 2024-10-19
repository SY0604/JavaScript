// Flatten Nested Arrays: Create a function to flatten a multi-dimensional array into a single array.
const flattenArray = (arr) => arr.flat(Infinity);

const nestedArray = [1, [2, [3, [4]]]];
console.log(`Flattened array: ${flattenArray(nestedArray)}`);
