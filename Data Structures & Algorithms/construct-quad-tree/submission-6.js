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
        let [leaf, val] = this.isLeafNode(grid);
        // check if grid is a leaf node
        if(leaf) {
            // return new Leaf Node
            return new Node(val, leaf, null, null, null, null);
        }
        // else
        else {
            let mid = grid.length/2;
            // return new Node with recursive calls to its children
            let node = new Node(val, leaf);
            node.topLeft = this.construct(grid.slice(0, mid).map(row => row.slice(0,mid)))
            node.topRight = this.construct(grid.slice(0,mid).map(row => row.slice(mid)))
            node.bottomLeft = this.construct(grid.slice(mid).map(row => row.slice(0,mid)))
            node.bottomRight = this.construct(grid.slice(mid).map(row => row.slice(mid)))

            return node;
        }
    }

    isLeafNode(grid) {
        console.log(grid)
        // init gridVal to grid[0][0]
        let gridVal = grid[0][0];
        // run loop for i=0 to i<grid.length
        for(let i=0;i<grid.length;i++){
            // run loop for j=0 to j<grid[0].length
            for(let j=0;j<grid[0].length;j++){
                // check if grid[i][j] not equal to gridVal, return [0, 1]
                if(grid[i][j] !== gridVal) return [0,0]
            }
        }
        
        // return [1, gridVal]
        return [1, gridVal];
    }
}
