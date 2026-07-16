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
        // init stack to empty array
        let stack = [];
        // init curr to root
        let curr = root;
        // init lastVisited to null
        let lastVisited = null;

        // run loop while stack is not empty or curr is not null
        while(stack.length || curr) {
            // run loop while curr is not null
            while(curr) {
                // push {node:curr, withRoot:curr.val, withoutRoot:0} to stack
                stack.push({node:curr, withRoot:curr.val, withoutRoot:0});
                // update curr to curr.left
                curr = curr.left;
            }

            // init top to top of stack
            let top = stack[stack.length-1];
            // check if top.node.right exists and it is not equal to lastVisited
            if(top.node.right && top.node.right !== lastVisited) {
                // update curr to top.node.right
                curr = top.node.right;
            }
            // else
            else {
                // pop stack and init/update curr, withRoot and withoutRoot
                let {node:curr, withRoot, withoutRoot} = stack.pop();

                // PROCESS ROOT
                // check if curr equals root
                if(curr === root) {
                    // return max of withRoot, withoutRoot
                    return Math.max(withRoot, withoutRoot);
                }

                // UPDATE PARENT
                // update top to top of stack
                top = stack[stack.length-1];
                // update top.withRoot by adding withoutRoot
                top.withRoot += withoutRoot;
                // update top.withoutRoot by adding max of withRoot, withoutRoot
                top.withoutRoot += Math.max(withRoot, withoutRoot);

                // update lastVisited to curr
                lastVisited = curr;
                // update curr to null
                curr = null;
            }
        }
    }
}
