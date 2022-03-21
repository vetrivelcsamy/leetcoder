/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hs = new Map();
    
   for(let num of nums){
     if(hs.has(num)){
      return true;   
     }
     hs.set(num);  
   }
   return false; 
};