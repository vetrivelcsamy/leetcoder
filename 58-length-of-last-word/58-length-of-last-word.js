/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let spt = s.trim().split(' ');
   return spt[spt.length - 1].length;
};