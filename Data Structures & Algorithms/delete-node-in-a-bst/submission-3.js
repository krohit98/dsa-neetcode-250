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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(!root) return null;

        if(root.val > key) root.left = this.deleteNode(root.left, key)
        else if(root.val < key) root.right = this.deleteNode(root.right, key);
        else {
            if(root.left){
                return this.insertNode(root.left, root.right);
            }
            else{
                return root.right;
            }
        }
        return root;
    }

    // insert right subtree in the left subtree
    insertNode(root, node){
        if(!node) return root;
        if(!root) return node;

        if(root.val > node.val) root.left = this.insertNode(root.left, node)
        else if(root.val < node.val) root.right = this.insertNode(root.right, node);

        return root;
    }
}
