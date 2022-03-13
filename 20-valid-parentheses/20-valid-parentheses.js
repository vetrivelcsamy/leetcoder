/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let buffer = [];
    
    if(s.length % 2 !== 0){
      return false;  
    }
    
    for(let i = 0; i < s.length; i++){
       if(s[i] === '('){
         buffer.push(')'); 
       }else if(s[i] === '{'){
         buffer.push('}'); 
       }else if(s[i] === '['){
         buffer.push(']'); 
       }else if(buffer.length === 0 || s[i] !== buffer.pop()){
         return false   
       }  
    }
    return buffer.length === 0;
};