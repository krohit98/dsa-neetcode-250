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
        let stack = [], curr = root, lastVisited = null;

        while(curr || stack.length){

            while(curr){
                stack.push({node:curr, hLeft:0, hRight:0});
                curr = curr.left;
            }

            let top = stack[stack.length-1].node;

            if(top.right && top.right != lastVisited){
                curr = top.right
            }
            else{
                curr = stack.pop();
                if(Math.abs(curr.hLeft - curr.hRight) > 1) return false;

                if(stack.length){
                    let parent = stack[stack.length-1].node;
                    if(parent.left == curr.node){
                        stack[stack.length-1].hLeft = Math.max(curr.hLeft, curr.hRight)+1
                    }
                    else if(parent.right == curr.node){
                        stack[stack.length-1].hRight = Math.max(curr.hLeft, curr.hRight)+1
                    }
                }

                lastVisited = curr.node;
                curr = null;
            }
        }

        return true;
    }
}
