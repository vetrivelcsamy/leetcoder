/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let hsmap = new Map();
    
    for(let i = 0; i < nums.length; i++){
       if(hsmap.has(nums[i])){
         return true;   
       } 
       hsmap.set(nums[i]); 
    }
    return false;
};