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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // init empty stack
        let stack = [];
        // init curr to root
        let curr = root;

        // run loop while stack is not empty or curr is not null
        while(stack.length || curr){
            // run loop while curr is not null
            while(curr){
                // check if curr.val is greater than p and less than q
                if((curr.val > p.val && curr.val < q.val) || (curr.val < p.val && curr.val > q.val))
                    // return curr.val
                    return curr;
                // check if curr.val is equal to p and less than q
                if(curr.val == p.val)
                    // return p
                    return p;
                // check if curr.val is equal to q and greater than p
                if(curr.val == q.val)
                    // return q
                    return q
                // push curr to stack
                stack.push(curr);
                // update curr to curr.left
                curr = curr.left;
            }
            
            // pop stack and update curr
            curr = stack.pop();
            // update curr to curr.right
            curr = curr.right;
        }
    }
}
