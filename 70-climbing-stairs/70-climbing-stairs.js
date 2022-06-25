/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   let fn1 = 2;
   let fn2 = 1;
   let fn = 0;

    if(n === 1){
      return fn2;  
    }
    
     if(n === 2){
      return fn1;  
    }
    
    for(let i = 3; i <= n; i++){
      fn = fn2 + fn1;
      fn2 = fn1;
      fn1 = fn;  
    }
    return fn;
};