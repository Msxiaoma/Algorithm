var plusOne = function(digits) {
    let length = digits.length -1;
    let flag = 0;
    let sum = digits[length] + 1;
    if(sum >= 10) {
       flag = 1;
       digits[length] = sum % 10;
       for(let i = length - 1; i > -1; i --) {
            digits[i] = digits[i] + flag;
            if(digits[i] >= 10) {
                flag = 1;
                digits[i] = digits[i] % 10;
            } else {
                flag = 0;
            }
        }
        console.log()
    } else {
        digits[length] = sum;
    }
    return digits;
};