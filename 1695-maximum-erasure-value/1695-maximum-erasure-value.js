/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  let sum = 0
  let res = -Infinity
  let j = 0
  let set = new Set()
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
  
   
    while(set.has(nums[i])) {
      set.delete(nums[j])
      sum -= nums[j]
      j++
    }
    set.add(nums[i]) 
    res = Math.max(res, sum) 
  }
  return res
};