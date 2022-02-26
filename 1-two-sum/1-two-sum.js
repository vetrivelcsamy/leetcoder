/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashtable = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashtable[target - nums[i]] !== undefined) {
      return [hashtable[target - nums[i]], i];
    }
    hashtable[nums[i]] = i;
  }
};
