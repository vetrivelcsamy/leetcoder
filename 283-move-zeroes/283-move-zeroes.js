/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
 // meesho interview question
  let n = nums.length;
  let left = 0;
  let right = 0;
    
   while(right < n){
     if(nums[right] !== 0){
       let temp = nums[right];
       nums[right] = nums[left];
       nums[left] = temp;
       left++ ; 
     }
      right++; 
   } 
};