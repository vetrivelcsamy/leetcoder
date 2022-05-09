/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     if(s.length % 2 !== 0){
      return false; 
   } 
    
   let buffer = []; 
   for(let i = 0; i < s.length; i++){
     if(s[i] === '('){
       buffer.push(')');  
     } else if(s[i] === '['){
      buffer.push(']');       
     } else if(s[i] === '{'){
       buffer.push('}');        
     }else if(buffer.length === 0 || buffer.pop() !== s[i]){
       return false;  
     }  
   }
   return buffer.length === 0;   
};