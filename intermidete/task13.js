// Task 13: Deep Clone an Object - Implement a deep clone function to copy all nested properties of an object.
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
const original = { name: "Alice", address: { city: "Wonderland" } };
const clone = deepClone(original);
console.log("Original:", original);
console.log("Clone:", clone);
