/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0 || n === Number(-2147483648)){
      return false;  
    }
    
  return (n & (n - 1)) === 0;  
};