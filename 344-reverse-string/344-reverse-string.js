/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // using inbuild
    // return s.reverse();
    // two pointers problem
    let left = 0;
    let right = s.length - 1;
    
    while(left <= right){
      [s[left], s[right]]  = [s[right], s[left]];
      left++;
      right--;  
    }
    return s;
};