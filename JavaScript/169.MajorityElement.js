/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}

    for (const num of nums) {
        map[num] = (map[num] || 0 ) + 1
        if (map[num] >= nums.length / 2) return num

    }
};

console.log(majorityElement([3,2,3])); // expected 3 ✔️
console.log(majorityElement( [2,2,1,1,1,2,2])); // expected 2 ✔️