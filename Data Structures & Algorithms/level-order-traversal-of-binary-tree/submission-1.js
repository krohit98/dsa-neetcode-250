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
        if(!root) return [];

        let result = []
        let queue = [root];

        while(queue.length){
            let level = [];
            let levelLength = queue.length;
            for(let i=0;i<levelLength;i++){
                let curr = queue.shift();
                level.push(curr.val);
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }
            result.push(level);
        }
        return result;
    }
}
