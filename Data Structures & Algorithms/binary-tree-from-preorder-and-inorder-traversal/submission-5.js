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

        let inorderMap = [];
        for(let i=0;i<inorder.length;i++){
            inorderMap[inorder[i]] = i;
        }

        const binaryTree = (pStart, pEnd, iStart, iEnd) => {
            if(pStart > pEnd || iStart > iEnd) return null;
            console.log(pStart, pEnd, iStart, iEnd)

            let root = preorder[pStart]
            let inorderIdx = inorderMap[root];
            let node = new TreeNode(root);
            let leftSize = inorderIdx-iStart
            node.left = binaryTree(pStart+1, pStart+leftSize, iStart, inorderIdx-1)
            node.right = binaryTree(pStart+leftSize+1, pEnd, inorderIdx+1, iEnd)
            return node;
        }
        return binaryTree(0, preorder.length-1, 0, inorder.length-1)
    }
}
