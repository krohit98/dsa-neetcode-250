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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let inorder = [];

        let stack = [];
        let curr = root;

        while(stack.length || curr){
            while(curr){
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            inorder.push(curr.val);
            curr = curr.right;
        }

        return inorder[k-1];
    }
}
