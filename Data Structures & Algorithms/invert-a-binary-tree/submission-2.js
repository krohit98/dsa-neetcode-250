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
     * @return {TreeNode}
     */
    invertTree(root) {
        // iterative preorder

        // init stack to empty array
        let stack = [];
        // init curr to root
        let curr = root;

        // run loop while stack is not empty or curr is not null
        while(stack.length > 0 || curr){
            // run loop while curr is not null
            while(curr){
                // swap curr.left and curr.right
                [curr.left, curr.right] = [curr.right, curr.left];
                // push curr to stack
                stack.push(curr);
                // update curr to curr.left
                curr = curr.left;
            }

            // pop stack and update curr
            curr = stack.pop();

            // update curr to curr.right
            curr = curr.right;
        }

        // return result
        return root;
    }
}
