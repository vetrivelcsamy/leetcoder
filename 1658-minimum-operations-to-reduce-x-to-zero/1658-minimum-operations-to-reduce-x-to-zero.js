/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let res = Infinity
  const Len = nums.length
  const right = new Map()
  let temp = 0
  for (let i = Len - 1; i >= 0; i--) {
    temp += nums[i]
    right.set(temp, i)
  }

  temp = 0
  for (let i = 0; i < Len; i++) {
    const floor = x - temp
    if (floor === 0) {
      res = Math.min(res, i)
    }
    if (right.has(floor)) {
      const _res = right.get(floor)
      if (_res < i) continue
      res = Math.min(res, i + Len - _res)
    }
    temp += nums[i]
  }

  return res === Infinity ? -1 : res
};