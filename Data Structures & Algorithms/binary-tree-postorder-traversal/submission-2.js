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
     * @return {number[]}
     */
    postorderTraversal(root) {
        let result = []
        let stack = []
        let curr = root;
        let lastVisited = null;

        while(curr || stack.length){
            while(curr){
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack[stack.length-1];

            if(curr.right && curr.right != lastVisited) {
                curr = curr.right;
            }
            else{
                curr = stack.pop();
                result.push(curr.val);
                lastVisited = curr;
                curr = null;
            }
        }

        return result;
    }
}
