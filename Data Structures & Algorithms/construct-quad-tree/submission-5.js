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
        
        let getQuadTree = (grid, r, c, n) => {
            let [isLeaf, val] = this.isLeafGrid(grid, r, c, n);
            if(isLeaf) {
                let node = new Node(val, isLeaf, null, null, null, null);
                return node;
            }
            else {
                const mid = n/2;
                let topLeft = getQuadTree(grid, r, c, mid);
                let topRight = getQuadTree(grid, r, c+mid, mid);
                let bottomLeft = getQuadTree(grid, r+mid, c, mid);
                let bottomRight = getQuadTree(grid, r+mid, c+mid, mid);

                let node = new Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight);
                return node;
            }
        }

        return getQuadTree(grid, 0, 0, grid.length)
    }

    isLeafGrid(grid, r, c, n) {
        let val = grid[r][c];
        for(let i=r;i<r+n;i++){
            for(let j=c;j<c+n;j++){
                if(val != grid[i][j]) return [0,0];
            }
        }
        return [1,val];
    }
}
