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
    rob(root) {
        let stack = [];
        let curr = root;
        let lastVisited = null;

        while(stack.length || curr){
            while(curr){
                stack.push({
                    withRoot:0,
                    withoutRoot:0,
                    node:curr
                });
                curr = curr.left;
            }

            let top = stack[stack.length-1];

            if(top.node.right && top.node.right!== lastVisited){
                curr = top.node.right;
            }
            else {
                let {withRoot, withoutRoot, node:curr} = stack.pop();

                // PROCESS CURRENT
                withRoot += curr.val;
                if(curr === root) return Math.max(withRoot, withoutRoot);

                // UPDATE PARENT
                top = stack[stack.length-1];
                if(top){
                    top.withRoot += withoutRoot;
                    top.withoutRoot += Math.max(withRoot, withoutRoot);
                }

                lastVisited = curr;
                curr = null;
            }
        }
    }
}
