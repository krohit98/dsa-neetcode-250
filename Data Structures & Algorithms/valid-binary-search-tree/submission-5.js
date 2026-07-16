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
     * @return {boolean}
     */
    isValidBST(root) {
        // init stack to empty array
        let stack = [];
        // init curr to root
        let curr = root;
        // init prev to null
        let prev = null;
    
        
        // run loop while stack is not empty or curr is not null
        while(stack.length || curr) {
            // run loop while curr is not null
            while(curr) {
                // push curr to stack
                stack.push(curr);
                // update curr to curr.left
                curr = curr.left;
            }

            // pop stack and update curr
            curr = stack.pop();
            // check if prev is not null and prev greater than equal to curr, return false
            if(prev !== null && prev >= curr.val) return false;
            // update prev to curr.val
            prev = curr.val;
            // update curr to curr.right
            curr = curr.right;
        }

        // return true
        return true;
    }
}
