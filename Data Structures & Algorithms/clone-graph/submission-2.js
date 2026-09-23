/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        let nodeArr = new Array(100);

        function cloneNeighbors(node){
            let clone = new Node(node.val);
            nodeArr[node.val] = clone;
            for(let i=0; i<node.neighbors.length; i++) {
                if(!nodeArr[node.neighbors[i].val]){
                    clone.neighbors.push(cloneNeighbors(node.neighbors[i]))
                }
                else clone.neighbors.push(nodeArr[node.neighbors[i].val])
            }
            return clone;
        }

        return cloneNeighbors(node);
    }
}
