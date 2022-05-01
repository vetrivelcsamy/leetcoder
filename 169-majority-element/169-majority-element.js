/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let srt = nums.sort((a,b) => a - b);
  return srt[Math.floor(srt.length / 2)];  
};