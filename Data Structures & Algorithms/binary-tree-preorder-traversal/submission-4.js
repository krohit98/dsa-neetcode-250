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
        // init result to empty array
        let result = [];
        // init stack to empty array
        let stack = [];
        // init curr to root
        let curr = root;

        // run loop while stack is not empty or curr is not null
        while(stack.length > 0 || curr){
            // run loop while curr is not null
            while(curr){
                // push curr.val in result
                result.push(curr.val);
                // push curr in stack
                stack.push(curr);
                // updare curr to curr.left
                curr = curr.left;
            }

            // pop stack and update curr
            curr = stack.pop();

            // update curr to curr.right
            curr = curr.right;
        }

        // return result
        return result;
    }
}
