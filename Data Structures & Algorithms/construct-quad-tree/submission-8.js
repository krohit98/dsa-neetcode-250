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

        const buildQuadTree = (r,c,n) => {
            let [leaf, val] = this.isLeafNode(grid,r,c,n);
            // check if grid is a leaf node
            if(leaf) {
                // return new Leaf Node
                return new Node(val, leaf, null, null, null, null);
            }
            // else
            else {
                let mid = n/2;
                // return new Node with recursive calls to its children
                let node = new Node(val, leaf);
                node.topLeft = buildQuadTree(r,c,mid)
                node.topRight = buildQuadTree(r,c+mid,mid)
                node.bottomLeft = buildQuadTree(r+mid,c,mid)
                node.bottomRight = buildQuadTree(r+mid, c+mid, mid)

                return node;
            }
        }

        return buildQuadTree(0,0,grid.length);
        
    }

    isLeafNode(grid,r,c,n) {
        // init gridVal to grid[0][0]
        let gridVal = grid[r][c];
        // run loop for i=0 to i<grid.length
        for(let i=r;i<r+n;i++){
            // run loop for j=0 to j<grid[0].length
            for(let j=c;j<c+n;j++){
                // check if grid[i][j] not equal to gridVal, return [0, 0]
                if(grid[i][j] !== gridVal) return [0,0]
            }
        }
        
        // return [1, gridVal]
        return [1, gridVal];
    }
}
