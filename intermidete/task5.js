// Find Prime Numbers: Write a function that returns an array of prime numbers up to a given limit.
const findPrimes = (limit) => {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (primes.every(p => i % p !== 0)) primes.push(i);
    }
    return primes;
};

const limit = 20;
console.log(`Prime numbers up to ${limit}: ${findPrimes(limit)}`);
