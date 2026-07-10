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
        let stack = []
        // init curr to root
        let curr = root;
        // init lastVisited
        let lastVisited = null;

        // run loop while stack is not empty or curr is not null
        while(stack.length || curr) {

            // run loop while curr is not null
            while(curr) {
                // push [lowest-value-found, curr, greatest-value-found] to stack
                stack.push({
                    left:{min:null, max:null},
                    node:curr,
                    right:{min:null, max:null}
                });
                // update curr to curr.left
                curr = curr.left;
            }

            // init top to top of stack
            let top = stack[stack.length-1];

            // check if top.right is not null and top.right is not last visited
            if(top.node.right && top.node.right != lastVisited) {
                // update curr to top.right
                curr = top.node.right;
            }
            // else
            else {
                
                let {left, node:curr, right} = stack.pop();

                // PROCESS ROOT
                // if ( lowest is not null and is >= curr.val ) or ( greatest is not null and is <= curr.val)
                if((left.max && curr.val <= left.max) || (right.min && curr.val >= right.min)) {
                    // return false
                    return false;
                }

                // UPDATE PARENT
                // update top to top of stack
                top = stack[stack.length-1];
                if(top) {
                    // if top[1].left equals curr
                    if(top.node.left == curr){
                        // if lowest is null, update top[0] to curr.val
                        // else, update top[0] to lowest
                        top.left.min = left.min == null ? curr.val : Math.min(left.min, curr.val)
                        top.left.max = right.max == null ? curr.val : Math.max(curr.val, right.max)
                    }
                    // if top[1].right equals curr
                    else if(top.node.right == curr){
                        // if greatest is null, update top[2] to curr.val
                        // else, update top[0] to greatest
                        top.right.min = left.min == null ? curr.val : Math.min(left.min, curr.val)
                        top.right.max = right.max == null ? curr.val : Math.max(curr.val, right.max)
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
