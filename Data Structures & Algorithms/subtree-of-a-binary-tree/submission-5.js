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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // edge case: null subroot is always a subtree
        if(!subRoot) return true;
        // init empty stack
        let stack = [];
        // init curr to root
        let curr = root;

        // run loop while stack is not empty and curr is not null
        while(stack.length || curr){
            // run loop while curr is not empty
            while(curr){
                // check if curr.val is same as subroot.val and they are the same subtree, return true
                if(curr.val === subRoot.val && this.isSameTree(curr, subRoot)){
                    return true;
                }
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

        // return false
        return false;
    }

    isSameTree(p, q){
        if(!p && !q) return true;
        else if((p && !q) || (!p && q)) return false;
        else if(p.val !== q.val) return false;
        else return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
