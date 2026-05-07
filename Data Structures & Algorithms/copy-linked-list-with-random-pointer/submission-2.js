// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let result = this.cloneRecursive(head, new Map());
        return result;
    }

    cloneRecursive(node, cloneMap){
        if(!node) return null;

        let cloned = new Node(node.val);
        cloneMap.set(node, cloned);
        cloned.next = this.cloneRecursive(node.next,cloneMap);
        cloned.random = cloneMap.get(node.random) // this.cloneRecursive(node.random,cloneMap);

        return cloned;
    }
}
