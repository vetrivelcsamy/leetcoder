/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   let hsmap = {};
    
    for(let i = 0; i < nums.length; i++){
      if(hsmap[nums[i]] !== undefined){
       return nums[i];   
      }
      hsmap[nums[i]] = i;  
     }
    
};