/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = '';
    const mostLonger = word1.length > word2.length ? word1.length : word2.length

    for (let i = 0; i < mostLonger; i++) {
        result += word1[i] ?? '';
        result += word2[i] ?? '';
    }

    return result;
};

console.log(mergeAlternately("abc", "pqr")); // expected "apbqcr" ✔️
console.log(mergeAlternately("ab", "pqrs")); // expected "apbqrs" ✔️
console.log(mergeAlternately("abcd", "pq")); // expected "apbqcd" ✔️