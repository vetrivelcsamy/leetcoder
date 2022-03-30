/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  let hsmap = new Map();
  let types = 0;  
   for(let candy of candyType){
       if(!hsmap.has(candy)){
         types++;
         hsmap.set(candy); 
       }
   } 
  return Math.min(types, (candyType.length / 2));
};