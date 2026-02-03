/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

// Solution here

const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersSum = 0;
function make_avg(param) {
    for(const num of param){
        numbersSum += num;
    }
    const totalNumbers = param.length;
    const avrg = numbersSum / totalNumbers;
    return avrg;
};
const result = make_avg(numbersArray);
console.log(result);