// Task 10: Simple Calculator - Create a function that performs basic arithmetic operations (addition, subtraction, multiplication, division).
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
        rl.question("Enter second number: ", (num2) => {
            const calculate = (a, op, b) => {
                switch (op) {
                    case '+': return a + b;
                    case '-': return a - b;
                    case '*': return a * b;
                    case '/': return a / b;
                    default: return "Invalid operator";
                }
            };
            console.log(`Result: ${calculate(parseFloat(num1), operator, parseFloat(num2))}`);
            rl.close();
        });
    });
});
