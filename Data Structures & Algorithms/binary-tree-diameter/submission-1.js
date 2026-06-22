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
    diameterOfBinaryTree(root) {
        // post order traversal

        // init empty stack
        let stack = [];
        // init curr to root
        let curr = root;
        // init lastVisited to null
        let lastVisited = null;
        // init diameter, hLeft, hRight to 0
        let [diameter, hLeft, hRight] = [0,0,0];

        // run loop while stack is not empty and curr is not null
        while(stack.length || curr){
            // run loop while curr is not null
            while(curr){
                // push {node, hLeft, hRight} to stack
                stack.push({node:curr, hLeft:0, hRight:0});
                // update curr to curr.left
                curr = curr.left;
            }

            // peek from stack and init top 
            let top = stack[stack.length-1];

            console.log(top)

            // check if top.node.right exists and is not equal to lastVisited
            if(top.node.right && top.node.right != lastVisited) {
                // update curr to top.node.right
                curr = top.node.right;
            }
            // else
            else {
                // pop stack and update {curr, hLeft, hRight}
                ({node:curr, hLeft, hRight} = stack.pop());
                // peek from stack and update top
                top = stack[stack.length-1];
                // check if curr is same top.node.left
                if(curr == top?.node.left) {
                    // update top.node.hLeft with (max of hLeft, hRight) + 1
                    top.hLeft = Math.max(hLeft, hRight) + 1;
                }
                // else
                else if(curr == top?.node.right) {
                    // update top.node.hRight with (max of hLeft, hRight) + 1
                    top.hRight = Math.max(hLeft, hRight) + 1;
                }
                
                // update diameter as max of diameter, hLeft+hRight
                diameter = Math.max(diameter, hLeft+hRight)
                // update lastVisited to curr
                lastVisited = curr;
                // update curr to null
                curr = null;
            }
        }

        // return result
        return diameter;
    }
}
