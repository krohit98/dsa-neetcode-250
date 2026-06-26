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
        if(!key) return root;

        let parent = null;
        let curr = root;

        while(curr){
            if(curr.val > key) {
                parent = curr;
                curr = curr.left;
            }
            else if(curr.val < key) {
                parent = curr;
                curr = curr.right;
            }
            else {
                if(curr.left){
                    this.insertNode(curr.left, curr.right);
                    if(parent && parent.left == curr) {
                        parent.left = curr.left;
                        return root;
                    }
                    else if(parent && parent.right == curr) {
                        parent.right = curr.left;
                        return root;
                    }
                    else return curr.left;
                }
                else {
                    if(parent && parent.left == curr) {
                        parent.left = curr.right;
                        return root;
                    }
                    else if(parent && parent.right == curr) {
                        parent.right = curr.right;
                        return root;
                    }
                    else return curr.right;
                }
            }
        }
    }

    insertNode(root, treeNode){
        if(!treeNode) return;

        let curr = root;

        while(curr){
            if(curr.val > treeNode.val){
                if(curr.left) curr = curr.left;
                else{
                    curr.left = treeNode;
                    curr = null;
                }
            }
            if(curr.val < treeNode.val){
                if(curr.right) curr = curr.right;
                else {
                    curr.right = treeNode;
                    curr = null;
                }
            }
        }
    }
}
