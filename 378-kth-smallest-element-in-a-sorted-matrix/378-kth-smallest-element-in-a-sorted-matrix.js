/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
     let buffer = [];
    
    for(let i = 0; i < matrix.length; i++){
       buffer.push(...matrix[i]);  
   }
   return buffer.sort((a, b) => a - b)[k - 1];
};