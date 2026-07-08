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
                let topLeft = getQuadTree(grid, r, c, n/2);
                let topRight = getQuadTree(grid, r, c+n/2, n/2);
                let bottomLeft = getQuadTree(grid, r+n/2, c, n/2);
                let bottomRight = getQuadTree(grid, r+n/2, c+n/2, n/2);

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
