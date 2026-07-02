/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        if(!root) return result;

        let queue = [root]

        while(queue.length){
            let level = [];
            for(let i=queue.length-1; i>=0; i--){
                let curr = queue.shift();
                if(curr){
                    level.push(curr.val);
                    if(curr.left) queue.push(curr.left);
                    if(curr.right) queue.push(curr.right);
                }
            }
            if(level && level.length > 0) result.push(level)
        }

        return result;
    }
}
