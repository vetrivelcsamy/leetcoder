/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   /*
     - create a two variable called min and max
     - loop entire array
     - check if value increment value not equals to 0
     - if 0 found reset the value to 0
     - then increment into max 
     - check min > max if yes return min
   */
    let zero = 0;
    let one = 0;
    
    for(let i = 0; i < nums.length; i++){
      if(nums[i] !== 0){
        zero++;  
      } else {
        zero = 0;
      }
      one = Math.max(one, zero)  
    }
    return one;
};