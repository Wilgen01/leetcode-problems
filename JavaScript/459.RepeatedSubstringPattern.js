/**
 * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const stringLength = s.length;
    if (s.substring(0, stringLength / 2) != s.substring(stringLength / 2, stringLength)) {
        for (let i = 1; i <= stringLength / 2; i++) {
            let sub = s.substring(0, i)
            let pattern = ''
            while (pattern.length < stringLength) {
                pattern = pattern + sub
            }
            if (pattern == s) return true
        }
        return false
    }
    else return true
};


var repeatedSubstringPatternAlternative = function (s) {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            const pattern = s.substring(0, i);
            const repeated = pattern.repeat(n / i);
            if (repeated === s) {
                return true;
            }
        }
    }
    return false;
};


console.log(repeatedSubstringPattern("abab")); // expected True ✔️
console.log(repeatedSubstringPattern("aba")); // expected False ✔️
console.log(repeatedSubstringPattern("abcabcabcabc")); // expected True ✔️
console.log(repeatedSubstringPattern("ababab")); // expected True ✔️
console.log(repeatedSubstringPattern("zzz")); // expected True ✔️