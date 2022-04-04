/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let left = 0;
   let q = 0; 
  let right = 1;
 
 for(let i = 1; i <= n; i++){
   left = q;
   q = right;
   right = left + q;  
 } 
  return right;  
};