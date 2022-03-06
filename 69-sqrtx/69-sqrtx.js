/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
 let left = 0;
 let right = x;
    
  while(left <= right){
    const mid = left + Math.floor((right - left) / 2);
    const sum = mid * mid;
      
     if(sum <= x){
        left = mid + 1;
     } else{
       right = mid - 1;  
     }
  }
    return right;
};