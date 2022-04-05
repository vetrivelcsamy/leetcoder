/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let buffer = 0;
    
  while(left < right){
     buffer =  Math.max(buffer, Math.min(height[left], height[right]) * (right - left));  
    if(height[left] < height[right]){
      left++;       
    } else{
      right--;  
    }
  } 
  return buffer;  
};