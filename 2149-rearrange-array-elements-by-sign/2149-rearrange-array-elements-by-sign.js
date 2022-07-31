/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let neg = [];
   let pos = [];
    
    for(let i = 0; i < nums.length; i++){
      if(nums[i] < 0){
        neg.push(nums[i]);   
      }else{
        pos.push(nums[i])  
      }
    }
    let merge = [];
    
    for(let m = 0; m < (neg.length + pos.length); m++){
      if(neg[m] !== undefined || pos[m] !== undefined){
        merge.push(pos[m], neg[m]);   
      } 
    }
    return merge;
};