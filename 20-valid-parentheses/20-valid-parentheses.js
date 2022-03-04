/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let buffer = []; 
   
   if(s.length % 2 === 1){
     return false;  
   } 
    
    
  for(let i = 0; i < s.length; i++){
      
    if(s[i] === '('){
       buffer.push(')'); 
        
    }else if(s[i] === '{'){
      buffer.push('}');  
        
    }else if(s[i] === '['){
      buffer.push(']'); 
        
    } else if(!buffer.length || s[i] !== buffer.pop()){
      return false;       
    }  
  }
  return !buffer.length;
};