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
        this.inorder(root, result);
        return result;
    }

    inorder(root, result){
        if(!root) return null;
        
        if(root.left) this.inorder(root.left, result);
        result.push(root.val);
        if(root.right) this.inorder(root.right, result);
    }
}
