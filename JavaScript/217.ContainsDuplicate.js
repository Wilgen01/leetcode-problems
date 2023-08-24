/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length
};

console.log(containsDuplicate([1,2,3,1])); // expected True ✔️
console.log(containsDuplicate([1,2,3,4])); // expected False ✔️
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // expected True ✔️