/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let wordArr = s.trim().split(" ")
    return wordArr[wordArr.length - 1].length
};



console.log(lengthOfLastWord("Hello World")); // expected 5 ✔️
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // expected 4 ✔️
console.log(lengthOfLastWord("luffy is still joyboy")); // expected 6 ✔️