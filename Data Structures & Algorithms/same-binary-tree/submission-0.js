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
        let q1 = [p];
        let q2 = [q];

        let i = 0;

        while(i < q1.length){
            let node = q1[i];
            if(node && node.left) q1.push(node.left)
            if(node && node.right) q1.push(node.right)
            i++;
        }

        let j = 0;

        while(j < q2.length){
            let node = q2[j];
            if(node && node.left) q2.push(node.left)
            if(node && node.right) q2.push(node.right)
            j++;
        }

        return q1.length == q2.length && JSON.stringify(q1) === JSON.stringify(q2)
    }
}
