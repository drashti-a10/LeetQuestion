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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let queue = [];
    let result = [];

    if(root === null) return result;

    queue.push(root);

    while(queue.length > 0){
        let levelNum = queue.length;
        let sublist = [];
        for(let i=0; i<levelNum; i++){
            if(queue[0].left !== null){
                queue.push(queue[0].left);
            }
            if(queue[0].right !== null){
                queue.push(queue[0].right);
            }
            sublist.push(queue.shift().val);
        }
        result.push(sublist);
    }
    return result.reverse();
};