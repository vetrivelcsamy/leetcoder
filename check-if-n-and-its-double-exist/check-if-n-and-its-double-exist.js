/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  /*
    - loop entire array
      - if value multipe of two value existed in array
       - return true
       - else false 
  */  
    
   for(let i = 0; i < arr.length; i++){
    for(let k = i + 1; k < arr.length; k++){
     if(arr[k] === 2 * arr[i] || arr[i] === 2 * arr[k]){
       return true;   
     }
    }  
   }
   return false;  
};