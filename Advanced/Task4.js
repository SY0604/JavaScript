// 4. Write a Function Pipeline: Implement a function pipeline that composes multiple functions and passes the result of one function to the next.

const pipeline = (...funcs) => (initialValue) => 
    funcs.reduce((acc, func) => func(acc), initialValue);


  const add2 = (x) => x + 2;
  const multiplyBy3 = (x) => x * 3;
  const subtract5 = (x) => x - 5;
  const processNumber = pipeline(add2, multiplyBy3, subtract5);
  const initialNumber = 5;
  const result = processNumber(initialNumber);
  console.log(`The result of processing ${initialNumber} is: ${result}`);
  