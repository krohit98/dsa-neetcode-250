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
     * @return {number[]}
     */
    inorderTraversal(root) {
        let result = [], stack = [], curr = root;

        while(curr || stack.length){
            while(curr){
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            result.push(curr.val);

            curr = curr.right;
        }

        return result;
    }
}
