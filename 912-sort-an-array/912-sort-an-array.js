/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
   for(let i = 0; i < nums.length; i++){
     for(let k = i + 1; k < nums.length; k++){
       if(nums[i] > nums[k]){
         //[nums[i], nums[k]] = [nums[k], nums[i]]; 
         let temp = nums[i];
         nums[i] = nums[k];
         nums[k] = temp;  
       }  
     }  
   }
  return nums;  
};