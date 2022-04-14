/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   let start = 0;
   let end = num;
    
   while(start <= end){
     const mid = start + Math.floor((end - start) >> 1);
      const sum = mid * mid; 
      if(sum === num){
        return true;  
      }
      if(sum > num){
        end = mid - 1;  
      } else{
        start = mid + 1;  
      }
   }
   return false; 
};