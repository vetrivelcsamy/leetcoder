/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let temp = 0;
  for(let i = 0; i < nums.length; i++){
    temp += nums[i];
    nums[i] = temp; 
  }
  return nums;  
};