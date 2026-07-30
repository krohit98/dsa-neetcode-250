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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        if(!preorder.length || !inorder.length) return null;
        let root = preorder[0];
        let inorderIdx = inorder.indexOf(root);
        let node = new TreeNode(root);
        node.left = this.buildTree(preorder.slice(1, inorderIdx+1), inorder.slice(0, inorderIdx+1))
        node.right = this.buildTree(preorder.slice(inorderIdx+1), inorder.slice(inorderIdx+1))
        return node;
    }
}
