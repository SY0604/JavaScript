// Generate Fibonacci Sequence: Write a function that generates the first n Fibonacci numbers.
const generateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
};

const fibCount = 10;
console.log(`First ${fibCount} Fibonacci numbers: ${generateFibonacci(fibCount)}`);
