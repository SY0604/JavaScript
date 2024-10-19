// Check Substring Presence: Write a function that checks if one string is a substring of another.
const isSubstring = (str, sub) => str.includes(sub);

const mainString = "Hello world";
const substring = "world";
console.log(`Is "${substring}" a substring of "${mainString}"? ${isSubstring(mainString, substring)}`);
