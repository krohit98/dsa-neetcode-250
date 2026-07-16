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
        // init leftBound to MIN SAFE INTEGER
        let leftBound = Number.MIN_SAFE_INTEGER;
        // init rightBound to MAX SAFE INTEGER
        let rightBound = Number.MAX_SAFE_INTEGER;
        
        // run loop while stack is not empty or curr is not null
        while(stack.length || curr) {
            // run loop while curr is not null
            while(curr) {
                // check if curr.val is less than equal to leftBound or greater than equal to rightBound, return false
                if(curr.val <= leftBound || curr.val >= rightBound) return false;

                // push [curr, rightBound] to stack
                stack.push([curr, rightBound]);
                // update rightBound to curr.val
                rightBound = curr.val;
                // update curr to curr.left
                curr = curr.left;
            }

            // pop stack and update [curr, rightBound]
            [curr, rightBound] = stack.pop();
            // update leftBound to curr.val
            leftBound = curr.val;
            // update curr to curr.right
            curr = curr.right;
        }

        // return true
        return true;
    }
}
