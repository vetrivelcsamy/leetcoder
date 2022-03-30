/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let st = s.split('').sort().join('');
   let tt = t.split('').sort().join('');
   return st === tt; 
};