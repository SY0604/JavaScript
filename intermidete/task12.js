// Find Intersection of Two Arrays: Write a function that returns the common elements between two arrays.
const findIntersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(`Intersection: ${findIntersection(array1, array2)}`);
