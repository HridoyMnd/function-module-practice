/**
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

// Solution here
const binaryStr = "01010101010010100101";
function count_zero(bstr) {
    let count = 0;
    for(const num4 of bstr){
        if(num4 === "0"){
            count++;
        }
    }

    return count;
};

const result4 = count_zero(binaryStr);
console.log(result4);
