/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // initialize end, target and prev pointer variables
        let end = head, target = null, prev = null; 

        // initialize count variable to 0
        let count = 0;

        // run loop while end is not null
        while(end){
            // increment end
            end = end.next;

            // increment count
            count++;

            // if count >= n
            if(count >= n)
                // increment target
                target = target ? target.next : head;
            // if count >= n+1
            if(count >= n+1)
                // increment prev
                prev = prev ? prev.next : head;
        }

        // if count is 1, there was only 1 node, return null
        if(count == 1) return null;
        if(count == n) return head.next;

        // set prev to target.next
        prev.next = target.next;

        // return head 
        return head;
    }
}
