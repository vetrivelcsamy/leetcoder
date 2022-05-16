/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
   let even = [];
   let odd = [];
    let buffer = []; 
   for(let i = 0; i < nums.length; i++){
     if(nums[i] % 2 === 0){
       even.push(nums[i]); 
     } else{
       odd.push(nums[i]);   
     }  
   } 
    

   for(let i = 0; i < nums.length / 2; i++){
     buffer.push(even[i]);
     buffer.push(odd[i]);  
   } 
   return buffer; 
};