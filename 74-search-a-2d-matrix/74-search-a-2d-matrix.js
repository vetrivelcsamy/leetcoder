/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for(let i = 0; i < matrix.length; i++){
    let left = 0;
    let right = matrix[i].length - 1;
    
    while(left <= right){
     const mid = left + Math.floor((right - left) / 2);
      
      if(matrix[i][mid] === target){
        return true;  
      }else if(matrix[i][mid] > target){
        right = mid - 1;  
      }else{
        left = mid + 1;  
      }  
    }  
  }
  return false;  
};