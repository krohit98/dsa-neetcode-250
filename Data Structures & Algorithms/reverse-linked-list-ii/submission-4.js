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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {

        if(left == right) return head;

        let count = 1,
        node = head,
        temp = null,
        start = null,
        prev = null,
        next = null;

        while(count < right){
            next = node.next;
            if(count == left-1){
                temp = node;
            }
            else if(count == left){
                start = node;
            }
            else if(count > left){
                node.next = prev;
            }
            prev = node;
            node = next;
            count++;
        }

        start.next = node.next;
        node.next = prev;
        if(!temp) head = node;
        else temp.next = node;

        return head;
    }
}
