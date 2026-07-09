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
    goodNodes(root) {
        // init result to 0
        let goodNodeCount = 0;
        // init stack to empty array
        let stack = [];
        // init curr to root
        let curr = root;
        // init largest to 0
        let largest = 0;

        // run loop while stack is not empty or curr is not null
        while(stack.length || curr){
            // run loop while curr is not null
            while(curr){
                // check if stack is empty and largest is 0
                if(!largest || largest <= curr.val){
                        // set largest to curr.val
                        largest = curr.val;
                        // increment result count
                        goodNodeCount++;
                }

                // push [curr, largest] in stack
                stack.push([curr, largest]);
                // set curr = curr.left
                curr = curr.left;
            }

            // pop stack and update [curr, largest]
           [curr, largest] = stack.pop();
            // set curr to curr.right
            curr = curr.right;
        }

        // return result
        return goodNodeCount;
    }
}
