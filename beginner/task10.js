// Simple Calculator: Create a function that performs basic arithmetic operations (addition, subtraction, multiplication, division).
const calculator = (a, b, operation) => {
    switch (operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return a / b;
        default: return 'Invalid operation';
    }
};

const number1 = 15;
const number2 = 5;
const operation = 'add';
console.log(`The result of ${operation}ing ${number1} and ${number2} is: ${calculator(number1, number2, operation)}`);
