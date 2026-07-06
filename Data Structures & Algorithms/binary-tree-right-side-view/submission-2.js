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
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        // init result to empty array
        let rightSide = [];
        // check if root is null, return result
        if(!root) return rightSide;

        // init queue to array with root as the only element
        let queue = [root];
        // init currIndex to 0
        let currIndex = 0;

        // run loop while currIndex is less than queue.length
        while(currIndex < queue.length){
            // init levelLength to queue.length - currIndex
            let levelLength = queue.length - currIndex;
            // run loop i = 0 to i < levelLength
            for(let i=0;i<levelLength;i++){
                // init curr to queue[currIndex] and increment currIndex
                let curr = queue[currIndex++];
                // check if curr.left is not null, add curr.left to queue
                if(curr.left) queue.push(curr.left);
                // check if curr.right is not null, add curr.right to queue
                if(curr.right) queue.push(curr.right);
                // if i == levelLength - 1, push curr.val to result
                if(i==levelLength-1) rightSide.push(curr.val);
            }
        }

        // return result
        return rightSide;
    }
}
