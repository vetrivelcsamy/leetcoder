/**
 * @param {string} s
 * @return {boolean}
 */

function vaildPali(s, i, j){
  while(i < j){
    if(s[i] !== s[j]){
          return false;
      }
    i++;
        j--;  
  }
  return true;  
}

var validPalindrome = function(s) {    
   let left = 0;
   let right = s.length - 1;
    
    while(left < right){
      if(s[left] !== s[right]){
        return vaildPali(s, left, right - 1) || vaildPali(s, left + 1, right); 
      }
      left++
      right--; 
    
    } 
    return true; 
};