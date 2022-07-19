/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
   let  buffer = [];
    
    for(let i = 0; i < numRows; i++){
      const row = new Array(i + 1).fill(1);
        for(let j = 1; j < row.length - 1; j++){
          row[j] = buffer[i - 1][j - 1] + buffer[i - 1][j];  
        }
        buffer.push(row);
    }
   return buffer; 
};