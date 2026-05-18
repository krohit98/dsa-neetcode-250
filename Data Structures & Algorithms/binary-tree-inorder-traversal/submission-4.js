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
    inorderTraversal(root) {
        let result = [];
        let stack = [];
        let node = root;
        
        while(node || stack.length){

            while(node){
                stack.push(node);
                node = node.left;
            }

            node = stack.pop();
            result.push(node.val);

            node = node.right;
        }

        return result;
    }
}
