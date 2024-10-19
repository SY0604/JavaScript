// Print Current Date and Time: Create a script to display the current date and time in a readable format.
const printCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
};

console.log(`Current date and time: ${printCurrentDateTime()}`);
