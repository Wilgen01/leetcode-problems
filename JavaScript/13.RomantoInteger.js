/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol       Value
 *  I             1
 *  V             5
 *  X             10
 *  L             50
 *  C             100
 *  D             500
 *  M             1000
 */


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])

    let output = 0
    for (let index = 0; index < s.length ; index++) {
        const element = s[index];
        const curr = map.get(element)
        const next = map.get(s[index + 1])
        if (curr >= next || next == undefined) {
            output += curr
        }else{
            output += next - curr;
            index ++
        }
    }
    return output;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToIntAlternative = function(s) {
    let output = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let curr;
        switch (s[i]) {
            case 'I': curr = 1; break;
            case 'V': curr = 5; break;
            case 'X': curr = 10; break;
            case 'L': curr = 50; break;
            case 'C': curr = 100; break;
            case 'D': curr = 500; break;
            case 'M': curr = 1000; break;
        }
        
        if (curr >= prev) {
            output += curr;
        } else {
            output -= curr;
        }
        prev = curr;
    }
    
    return output;
};

console.log(romanToInt("III")); // expected 3 ✔️
console.log(romanToInt("LVIII")); // expected 58 ✔️
console.log(romanToInt("MCMXCIV")); // expected 1994 ✔️

console.log(romanToIntAlternative("III")); // expected 3 ✔️
console.log(romanToIntAlternative("LVIII")); // expected 58 ✔️
console.log(romanToIntAlternative("MCMXCIV")); // expected 1994 ✔️