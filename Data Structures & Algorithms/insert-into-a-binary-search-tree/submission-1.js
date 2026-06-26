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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if(!root) return new TreeNode(val);
        let curr = root;

        while(curr){
            if(curr.val > val) {
                if(curr.left) curr = curr.left;
                else {
                    curr.left = new TreeNode(val);
                    curr = null;
                }
            }
            else {
                if(curr.right) curr = curr.right;
                else {
                    curr.right = new TreeNode(val);
                    curr = null;
                }
            }
        }

        return root;
    }
}
