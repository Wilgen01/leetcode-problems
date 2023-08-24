/**
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
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
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const length = columnTitle.length;
    if (length == 1) return columnTitle.charCodeAt(0) - 64
    
    let result = 0
    for (let i = 0; i <= length - 1; i++) {
        if (i == length - 1) result += columnTitle.charCodeAt(i) - 64
        else result += (columnTitle.charCodeAt(i) - 64) * (26 ** (length - 1 - i )); 
            
    }

    return result

};




console.log(titleToNumber('A')); // expected 1 ✔️
console.log(titleToNumber('AB')); // expected 28 ✔️
console.log(titleToNumber('ZY')); // expected 701 ✔️
console.log(titleToNumber('AA')); // expected 27 ✔️
console.log(titleToNumber('Z')); // expected 26 ✔️
console.log(titleToNumber('FXSHRXW')); // expected 2147483647 ✔️
console.log(titleToNumber('AAZ')); // expected 728 ✔️