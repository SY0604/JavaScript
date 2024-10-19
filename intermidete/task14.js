// Task 14: Throttle a Function - Write a function that throttles the execution of another function (limits how often a function is called).

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

const exampleFunction = () => {
    console.log("Function is executed");
};

rl.question("Enter the throttle limit in milliseconds: ", (input) => {
    const limit = parseInt(input);

    if (isNaN(limit) || limit <= 0) {
        console.log("Please enter a valid positive number for the throttle limit.");
        rl.close();
        return;
    }

    const throttledFunction = throttle(exampleFunction, limit);

    console.log(`The function will now be throttled with a limit of ${limit} milliseconds.`);
    console.log("Try calling the function repeatedly to see the throttling effect.");

    let intervalId = setInterval(() => {
        throttledFunction();
    }, 200); // Calls the function every 200ms

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped the simulation after 5 seconds.");
        rl.close();
    }, 5000);
});
