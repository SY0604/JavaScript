// Task 5: Find Prime Numbers - Write a function that returns an array of prime numbers up to a given limit.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the limit: ", (limit) => {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const findPrimes = (n) => {
        let primes = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) primes.push(i);
        }
        return primes;
    };
    console.log(`Prime numbers up to ${limit}:`, findPrimes(parseInt(limit)));
    rl.close();
});
