/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    for (let index = 0; index < n; index++) {
        nums1[m + index] = nums2[index];
    }

    nums1.sort((a, b) => a - b);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // ✔️