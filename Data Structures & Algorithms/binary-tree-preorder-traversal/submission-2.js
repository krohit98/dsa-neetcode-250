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
    preorderTraversal(root) {
        let result = [];
        let curr = root;
        let stack = [];

        while(curr || stack.length){
            while(curr){
                result.push(curr.val);
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();

            curr = curr.right;
        }

        return result;
    }
}
