// FizzBuzz: Write a program that prints numbers from 1 to 100 but replaces multiples of 3 with "Fizz" and 5 with "Buzz."
const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);
    }
};

fizzBuzz();
