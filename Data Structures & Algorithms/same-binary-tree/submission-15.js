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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // init empty stack
        let stack = [];
        // init currP to p and currQ to q
        let currP = p, currQ = q;

        // run loop while stack is not empty or currP is not null or currQ is not null
        while(stack.length || currP || currQ){
            // run loop while currP is not null or currQ is not null
            while(currP || currQ){
                // if either one of currP or currQ is null, return false
                if((currP && !currQ) || (!currP && currQ)) return false;
                // if currP.val does not equal currQ.val, return false
                if(currP.val !== currQ.val) return false;
                // push [currP, currQ] to stack
                stack.push([currP, currQ]);
                // set currP to currP.left
                currP = currP.left;
                // set currQ to currQ.left
                currQ = currQ.left;
            }

            // pop stack and update [currP, currQ]
            [currP, currQ] = stack.pop();

            // update currP to currP.right
            currP = currP.right;
            // update currQ to currQ.right
            currQ = currQ.right;
        }

        // return true
        return true;
    }
}
