/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let buffer = []
    for(let i = 1; i <= n; i++) {
       if(i % 3 == 0 && i % 5 == 0  ){
           buffer.push("FizzBuzz")
       } else if(i % 3 == 0){
           buffer.push("Fizz")
       } else if(i % 5 == 0){
           buffer.push("Buzz")
       } else {
         buffer.push(i.toString())
      }
    }
    return buffer;  
};