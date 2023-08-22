/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ''
    while (columnNumber > 0) {
        const left = columnNumber % 26 || 26;
        result = String.fromCharCode(64 + left) + result;
        columnNumber = (columnNumber - left) / 26     
    }

    return result
};




console.log(convertToTitle(1)); // expected A ✔️
console.log(convertToTitle(28)); // expected AB ✔️
console.log(convertToTitle(701)); // expected ZY ✔️
console.log(convertToTitle(27)); // expected AA ✔️
console.log(convertToTitle(26)); // expected Z ✔️