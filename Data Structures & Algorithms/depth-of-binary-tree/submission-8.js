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
        let maxDepth = 0;
        // init empty stack
        let stack = []
        // init curr to root
        let curr = root;
        // init depth to 0
        let depth = 0;

        // run loop while stack is not empty or curr is not null
        while(stack.length || curr){
            // run loop while curr is not null
            while(curr){
                // increment depth by 1
                depth++;
                // push [curr, depth] to stack
                stack.push([curr, depth]);
                // update curr to curr.left
                curr = curr.left;
            }

            // pop stack and update [curr, depth]
            [curr, depth] = stack.pop();
            // update maxDepth to max of maxDepth, depth
            maxDepth = Math.max(maxDepth, depth);

            // update curr to curr.right
            curr = curr.right;
        }

        // return result
        return maxDepth;
    }
}
