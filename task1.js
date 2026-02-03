/**
Take four parameters. Multiply the four numbers and then return the result
 */

// Solutoin here

const num1 = 2;
const num2 = 3;
const num3 = 4;
const num4 = 5;

function multiplyNumbers (a, b, c, d) {
   const multiplyResult = a * b * c * d;
   return multiplyResult;
};

const returnValue = multiplyNumbers(num1, num2, num3, num4);
console.log(returnValue);