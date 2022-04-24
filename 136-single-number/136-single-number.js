/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let buffer = 0;
    
    for(let num of nums){
      buffer ^= num;  
    }
   return buffer; 
};