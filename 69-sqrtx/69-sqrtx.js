/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0;
  let right = x;
  let ans = -1;
    
  while(left <= right){
    const mid = left + Math.floor((right - left) / 2);
    const sum = mid * mid;
      
    if(sum <= x){
      ans = mid;  
      left = mid + 1;  
    } else{
      right = mid - 1;  
    }  
  }
  return ans;  
};