/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hstable = {};
   
   for(let i = 0; i < nums.length; i++){
     if(hstable[nums[i]] !== undefined){
        return true 
     }
     hstable[nums[i]] = i;  
   } 
   return false; 
};