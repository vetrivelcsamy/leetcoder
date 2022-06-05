/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let l = 0, r = 0;
    let res = -Infinity;
    let curRes = 0;
    let cur = new Set();
    while (r < nums.length) {
        while (!cur.has(nums[r]) && r < nums.length) {
            cur.add(nums[r]);
            curRes += nums[r];
            res = Math.max(res, curRes);
            r += 1;
        }
        while (r !== nums.length && cur.has(nums[r])) {
            cur.delete(nums[l]);
            curRes -= nums[l];
            l += 1;
        }
    }
    return res;
};