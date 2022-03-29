/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
 for(let i = 0; i < numbers.length; i++){
   let left = i + 1;
   let right = numbers.length;
   
   while(left <= right){
    const mid = left + Math.floor((right - left) / 2);
    let sum = numbers[mid] + numbers[i];
    if(sum === target){
      return [i + 1, mid + 1];          
    } else if(sum > target){
      right = mid - 1;   
    } else{
      left = mid + 1;  
    }
   }  
 }
 return [-1, -1];   
};