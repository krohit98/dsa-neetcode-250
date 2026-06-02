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
        if(!root) return false;
        if(!subRoot) return true;

        if(this.isSameTree(root,subRoot)) return true;
        else{
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
        }
    }

    isSameTree(root, subroot){
        if(!root && !subroot) return true;

        if(root && subroot && root.val == subroot.val){
            return this.isSameTree(root.left, subroot.left) && this.isSameTree(root.right, subroot.right)
        }
        else return false;
    }
}
