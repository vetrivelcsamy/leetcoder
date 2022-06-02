/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
   return matrix[0].map((v,i) =>matrix.map((a,j) =>a[i]))
  
};