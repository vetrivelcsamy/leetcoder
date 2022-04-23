/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let srt = nums.sort((a, b) => a - b);
   let buffer = []; 
  for(let i = 1; i <= nums.length; i++){
    if(!srt.includes(i)){
      buffer.push(i);
    }   
  }
  return buffer;  
};