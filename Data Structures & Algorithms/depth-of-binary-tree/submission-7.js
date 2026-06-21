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
        // init maxDepth to 0
        // init count to 0
        let maxDepth = 0, count = 0;

        // define recursive inorder function : (root, count)
        function inorder(root, count){
            // return if root is null
            if(!root) return;
            // call function with left child and count+1
            inorder(root.left, count+1);
            // update maxDepth to max of maxDepth, count
            maxDepth = Math.max(maxDepth, count);
            // call function with right child and incremented count+1
            inorder(root.right, count+1);
        }

        // call recursive function with root and count+1
        inorder(root, count+1)

        // return result
        return maxDepth;
    }
}
