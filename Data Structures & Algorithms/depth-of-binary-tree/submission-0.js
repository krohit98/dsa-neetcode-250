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
     * @return {number}
     */
    maxDepth(root) {
        let maxDepth = 0;
        let count = 0;

        function findDepth(root){
            console.log(root?.val, count)
            if(!root) {
                maxDepth = Math.max(maxDepth, count);
                return;
            }
            count++;
            findDepth(root.left);
            findDepth(root.right);
            count--;
        }
        findDepth(root);

        return maxDepth;
    }
}
