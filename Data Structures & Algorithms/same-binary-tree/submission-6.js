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
        const isSame = this.preOrder(p,q);
        return isSame;
    }

    preOrder(p, q){
        if(!p && !q) return true;

        if((p && !q) || (!p && q) || (p.val != q.val)) return false;

        const isLeftSame = this.preOrder(p.left, q.left);
        if(!isLeftSame) return false;
        const isRightSame = this.preOrder(p.right, q.right);
        if(!isRightSame) return false;

        return true;
    }
}
