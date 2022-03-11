/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // sort check both value same
  return s.split('').sort().join('') === t.split('').sort().join('');
};