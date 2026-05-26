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
        let diameter = 0;
        let stack = [], curr = root, lastVisited = null;

        while(curr || stack.length){
            while(curr){
                stack.push({node:curr, hleft:0, hright:0})
                curr = curr.left;
            }

            let top = stack[stack.length-1].node

            if(top.right && top.right != lastVisited){
                curr = top.right;
            }
            else{
                curr = stack.pop();
                diameter = Math.max(diameter, curr.hleft+curr.hright);

                if(stack.length){
                    let parent = stack[stack.length-1].node;
                    if(parent.left == curr.node){
                        stack[stack.length-1].hleft = Math.max(curr.hleft, curr.hright)+1;
                    }
                    else if(parent.right == curr.node){
                        stack[stack.length-1].hright = Math.max(curr.hleft, curr.hright)+1;
                    }
                }
                
                lastVisited = curr.node;
                curr = null;
            }
        }
        return diameter;
    }
}
