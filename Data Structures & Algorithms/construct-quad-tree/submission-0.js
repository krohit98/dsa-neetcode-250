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
        let [isLeaf, val] = this.isLeafGrid(grid);
        if(isLeaf) {
            let node = new Node(val, isLeaf, null, null, null, null);
            return node;
        }
        else {
            let mid = grid.length/2;
            let topLeft = this.construct(grid.slice(0, mid).map(row => row.slice(0, mid)));
            let topRight = this.construct(grid.slice(0, mid).map(row => row.slice(mid)));
            let bottomLeft = this.construct(grid.slice(mid).map(row => row.slice(0, mid)));
            let bottomRight = this.construct(grid.slice(mid).map(row => row.slice(mid)));

            let node = new Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight);
            return node;
        }
    }

    isLeafGrid(grid) {
        let val = grid[0][0];
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(val != grid[i][j]) return [0,0];
            }
        }
        return [1,val];
    }
}
