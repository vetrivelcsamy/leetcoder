/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let buffer = [];
   let hstable = {} 
   for(let i = 0; i < nums.length; i++){
     if(hstable[nums[i]] !== undefined){
        buffer.push(nums[i]); 
     }
     hstable[nums[i]] = i;  
   }
   return buffer; 
};