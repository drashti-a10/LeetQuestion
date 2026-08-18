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
 * @return {number}
 */
var maxPathSum = function(root) {
   let maxi = -Infinity;

   function maxPath(node){
    if(node=== null) return 0;

    let leftSum = maxPath(node.left);
    let rightSum = maxPath(node.right);
    leftSum = Math.max(0, leftSum);
    rightSum = Math.max(0, rightSum);

    let currentPath = node.val + leftSum + rightSum;
    maxi = Math.max(maxi, currentPath);

    return node.val + Math.max(leftSum, rightSum);
   } 
   maxPath(root);
   return maxi;
};