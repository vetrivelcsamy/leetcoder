/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
   let n = nums.length; 
   let s = 0;
   let e = 0; 
    
    while(e <= n){
      if(nums[e] % 2 === 0){
        [nums[s], nums[e]] = [nums[e], nums[s]];
        s++;  
      }
      e++;  
    }
    return nums;
};