/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let add = BigInt(num.join('')) + BigInt(k);
    let str = add.toString();
    let buffer = [];
    for(let i = 0; i < str.length; i++){  
      buffer.push(Number(str[i]));
    }
    return buffer;
};