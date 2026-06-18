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
    postorderTraversal(root) {
        // init result to empty array
        let result = [];
        // init stack to empty array
        let stack = [];
        // init curr to root
        let curr = root;
        // init lastVisited to null
        let lastVisited = null;

        // run loop while stack is not empty or curr is not null
        while(stack.length > 0 || curr){
            // run loop while curr is not null
            while(curr){
                // push curr to stack
                stack.push(curr);
                // update curr to curr.left
                curr = curr.left;
            }

            // init top to top of stack
            let top = stack[stack.length-1];

            // check if top.right is not null and not last visited
            if(top.right && top.right != lastVisited){
                // update curr to curr.right
                curr = top.right;
            }
            // else
            else {
                // pop stack and update curr
                curr = stack.pop();
                // push curr.val in result
                result.push(curr.val);
                // update lastVisited to curr
                lastVisited = curr;
                // update curr to null
                curr = null;
            }
        }

        // return result
        return result;
    }
}
