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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        // init stack as empty array
        let stack = [];
        // init curr to root
        let curr = root;
        // init lastVisited to null
        let lastVisited = null;

        // run loop while stack is not empty or curr is not null
        while(stack.length || curr) {
            // run loop while curr is not empty
            while(curr) {
                // push curr to stack
                stack.push(curr);
                // set curr to curr.left
                curr = curr.left;
            }

            // init top to top of stack
            let top = stack[stack.length-1];

            // check if top.right exists and is not equal to lastVisited
            if (top.right && top.right !== lastVisited) {
                // set curr to top.right
                curr = top.right;
            }
            // else
            else {
                // pop stack and update curr
                curr = stack.pop();
                // check if curr.val equals target and curr.left and curr.right are null
                if(curr.val == target && !curr.left && !curr.right) {
                    // check if stack is empty, set root to null and break
                    if(!stack.length) {
                        root = null;
                        break;
                    };
                    // update top to top of stack
                    top = stack[stack.length-1];

                    // if top.left equals curr
                    if (top.left === curr) {
                        // set top.left to null
                        top.left = null;
                    }
                    // if top.right equals curr
                    else if (top.right === curr) {
                        // set top.right to null
                        top.right = null;
                    }
                }
                    
                // set lastVisited to curr
                lastVisited = curr;
                // set curr to null
                curr = null;
            }
        }

        // return result
        return root;
    }
}
