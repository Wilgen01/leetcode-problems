/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let index = 0; index < strs[0].length; index++) {
        let letter = strs[0][index];
        for (let j = 1; j < strs.length; j++) {
            const element = strs[j];
            if (element[index] !== letter) {
                return strs[0].substring(0, index);
            }
        }            
    }
    return strs[0];
};


console.log(longestCommonPrefix(["flower","flow","flight"])); // espected "fl" ✔️
console.log(longestCommonPrefix(["dog","racecar","car"])); // espected "" ✔️
console.log(longestCommonPrefix(["test1","test2","test3"])); // espected "test" ✔️