/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
          let pre = 0, cur = 0, tmp;
        for(let num of nums) {
            tmp = cur;
            cur = Math.max(pre + num, cur);
            pre = tmp;
        }
        return cur; 
};