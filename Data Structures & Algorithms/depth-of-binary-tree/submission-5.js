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

        let stack = [];
        let curr = root;

        while(curr || stack.length){
            while(curr){
                count++;
                stack.push([curr, count]);
                curr = curr.left;
            }
            maxDepth = Math.max(maxDepth, count);

            [curr,count] = stack.pop();
            curr = curr.right;
        }

        return maxDepth;
    }
}
