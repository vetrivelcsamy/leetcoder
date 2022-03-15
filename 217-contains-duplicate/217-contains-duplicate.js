/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  /***
   map = {}
    loop 0...n   
      map.has(n[i])
        true
       map.set(n[i])
      false 
  ***/
  let hsmap = {};
    
    for(let i = 0; i < nums.length; i++){
       if(hsmap[nums[i]] !== undefined){
          return true; 
        }
      hsmap[nums[i]] = i;
    }
   return false; 
};