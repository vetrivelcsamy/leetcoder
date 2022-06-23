/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let buffer = 0;
    
    for(let i = 0; i < nums.length; i++){
       buffer += nums[i];
       nums[i] = buffer; 
    }
    return nums;
};