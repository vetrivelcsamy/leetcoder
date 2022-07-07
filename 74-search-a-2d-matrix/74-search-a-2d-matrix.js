/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     for(let i = 0; i < matrix.length; i++){
      for(let k = 0; k < matrix[i].length; k++){
        if(matrix[i][k] === target){
          return true; 
       }   
      }     
    }
   return false;   
};