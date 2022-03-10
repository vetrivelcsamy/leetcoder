/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
   let joins = num.join('').toString();  
   let add = (BigInt(joins) + BigInt(k)).toString();
   return add.split('');
};