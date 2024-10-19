// Task 4: Convert Celsius to Fahrenheit - Write a program that converts temperatures from Celsius to Fahrenheit.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter temperature in Celsius: ", (celsius) => {
    const toFahrenheit = (c) => (c * 9/5) + 32;
    console.log(`${celsius}°C is ${toFahrenheit(parseFloat(celsius))}°F`);
    rl.close();
});
