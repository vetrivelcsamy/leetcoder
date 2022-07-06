/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 2;
  let fast = 2;
  let n = nums.length;  
    
  while(fast < n){
    if(nums[slow - 2] !== nums[fast]){
      nums[slow] = nums[fast];
      slow++;  
    }
    fast++;  
  }
  return slow;  
};