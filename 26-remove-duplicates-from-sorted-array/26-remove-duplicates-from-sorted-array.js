/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let buffer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[buffer++] = nums[i];
    }
  }
  return buffer;
};
