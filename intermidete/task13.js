// Deep Clone an Object: Implement a deep clone function to copy all nested properties of an object.
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = deepClone(originalObject);
console.log(`Cloned object:`, clonedObject);
