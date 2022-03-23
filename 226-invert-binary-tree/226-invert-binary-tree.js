/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null){
    return null;  
  }
  
  let left = root.left; // 2 -> 1 3
  root.left = root.right; // left bcom 7 -> 6 9
  root.right = left // right bcom 2 -> 1 3   
    
  invertTree(root.left);
  invertTree(root.right); 
  return root;
};