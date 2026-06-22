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
    isBalanced(root) {
        // POSTORDER TRAVERSAL

        // init empty stack
        let stack = [];
        // init curr to root
        let curr = root;
        // init lastVisited
        let lastVisited = null;

        // run loop while stack is not empty and curr is not null
        while(stack.length || curr){
            // run loop while curr is not null
            while(curr){
                // push {node = curr, hLeft = 0, hRight = 0} to stack
                stack.push({node:curr, hLeft:0, hRight:0});
                // update curr to curr.left
                curr = curr.left;
            }

            // peek stack and init top
            let top = stack[stack.length-1];

            // check if top.right exists and is not last visited
            if(top.node.right && top.node.right != lastVisited) {
                // update curr to top.right
                curr = top.node.right;
            }
            // else
            else {
                let hLeft, hRight;
                // pop stack and update {curr, hLeft, hRight}
                ({node: curr, hLeft, hRight} = stack.pop());
                // check if absolute(hLeft - hRight) is greater than 1
                if(Math.abs(hLeft-hRight) > 1){
                    // return false
                    return false;
                }
                // check if stack is not empty
                if(stack.length){
                    // update top to current stack top
                    top = stack[stack.length-1];
                    // if curr equals top.node.left
                    if(curr == top.node.left) {
                        // update top.hLeft as (max of hLeft, hRight) + 1
                        top.hLeft = Math.max(hLeft, hRight) + 1;
                    }
                    // else
                    else {
                        // update top.hRight as (max of hLeft, hRight) + 1
                        top.hRight = Math.max(hLeft, hRight) + 1;
                    }
                }
                // update lastVisited to curr
                lastVisited = curr;
                // update curr to null
                curr = null;
            }
        }

        // return true
        return true;
    }
}
