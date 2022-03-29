/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   let hsmap = new Map();
    
   for(let num of nums){
     if(hsmap.has(num)){
       return num;  
     }
     hsmap.set(num);  
   } 
};