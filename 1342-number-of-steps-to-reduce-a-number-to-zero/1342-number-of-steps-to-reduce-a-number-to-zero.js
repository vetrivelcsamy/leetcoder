/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
   let buffer = 0; 
   while(num > 0){
     if(num % 2 === 1){
       num -= 1;
     }else{
        num /= 2
     }  
     buffer++  
   } 
    return buffer;
};