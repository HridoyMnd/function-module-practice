/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

// Solution 5 here

const number5 = 12;
function odd_even(paarm5) {
    if(paarm5 % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
    
};

const result5 = odd_even(number5);
console.log(result5);