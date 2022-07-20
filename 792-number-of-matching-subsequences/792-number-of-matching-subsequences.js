/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  let num = 0
  for (let i = 0; i < words.length; i++) {
    let aa = helper(words[i])
    if (aa) num += 1
  }

  function helper(words) {
    let j = -1
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      j = S.indexOf(word, j)
      if (j === -1) return false
      j = j + 1
    }
    return true
  }

  return num
};