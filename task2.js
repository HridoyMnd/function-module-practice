/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

// Solution here
const number = 5;

function myFunction (num) {
    if(num % 2 === 1){
       const multiplyResult =  num * 2;
       return multiplyResult
    }
    else {
       const dividedResult =  num / 2;
       return dividedResult;
    }

};

const result = myFunction(number);
console.log(result);