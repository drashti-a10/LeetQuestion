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
var levelOrder = function(root) {
    let queue = [];
    let wrapList = [];

    if(root === null) return wrapList;

    queue.push(root);

    while(queue.length>0){
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
        wrapList.push(sublist);
    }
    return wrapList;
};