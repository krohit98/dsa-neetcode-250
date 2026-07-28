/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {

        const buildTree = (r,c,n) => {
            const [isLeaf, val] = this.isLeafNode(grid,r,c,n);
            if(isLeaf) {
                return new Node(val, isLeaf, null, null, null, null);
            }
            else {
                let mid = n/2;
                let node = new Node(isLeaf, val);
                node.topLeft = buildTree(r,c,mid);
                node.topRight = buildTree(r,c+mid,mid);
                node.bottomLeft = buildTree(r+mid,c,mid);
                node.bottomRight = buildTree(r+mid, c+mid,mid);

                return node;
            }
        }

        return buildTree(0,0,grid.length);
    }

    isLeafNode(grid,r,c,n) {
        let gridVal = grid[r][c];
        for(let i=r; i<r+n; i++){
            for(let j=c; j<c+n; j++){
                if(grid[i][j] !== gridVal)
                    return [0,0];
            }
        }
        return [1,gridVal];
    }
}
