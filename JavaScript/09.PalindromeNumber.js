/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

var isPalindrome = function(x) {
    const numberString  = x.toString().split('');
    const mid = numberString.length / 2;
    const left = numberString.slice(0, mid)
    const rigth = numberString.slice(mid, numberString.length).reverse()
    result = true;
    for (let index = 0; index < left.length; index++) {
       if (left[index] != rigth[index]) {
            result =  false
            break;
       }

    }
    return result
};


var isPalindrome2 = function(x) {
    const reversed = `${x}`.split("").reverse().join("")

    return reversed == `${x}`
};




//test cases
console.log(isPalindrome(12321)); // expected true ✔️
console.log(isPalindrome(-121)); // expected false ✔️
console.log(isPalindrome(10)); // expected false ✔️
console.log(isPalindrome(12321)); // expected true ✔️


// test cases
console.log(isPalindrome2(12321)); // expected true ✔️
console.log(isPalindrome2(-121)); // expected false ✔️
console.log(isPalindrome2(10)); // expected false ✔️
console.log(isPalindrome2(12321)); // expected true ✔️