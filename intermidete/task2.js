// Validate Email Format: Write a function to check if an email address is valid using regular expressions.
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const email = "example@test.com";
console.log(`Is "${email}" a valid email? ${isValidEmail(email)}`);
