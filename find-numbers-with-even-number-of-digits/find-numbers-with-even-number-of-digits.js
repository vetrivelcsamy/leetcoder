/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  /*
    create variable buffer
    loop entire array 
      check length of each value
       if found any increment
    return the value   
  */
    let buffer = 0;
    
   for(let i = 0; i < nums.length; i++){
    if(nums[i].toString().length % 2 !== 1){
      buffer++;     
    }   
   }
  return buffer;  
};