/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let ans = nums.length;  
  while(start <= end){
    const mid = start + Math.floor((end - start) >> 1);

     if(target <= nums[mid]){
      ans = mid;
       end = mid - 1;  
     }else{
       start = mid + 1;  
     }
  }
   return ans; 
};