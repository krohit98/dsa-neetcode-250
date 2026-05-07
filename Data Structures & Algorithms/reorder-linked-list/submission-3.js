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
     * @return {void}
     */
    reorderList(head) {
        let ptrArray = [];
        let node = head;
        while(node){
            ptrArray.push(node);
            node = node.next;
        }
        let dummy = new ListNode();
        node = dummy;
        let start = 0, end = ptrArray.length-1;
        while(start < end){
            ptrArray[end].next = null;
            ptrArray[start].next = ptrArray[end];
            node.next = ptrArray[start];
            node = node.next.next;
            start++;
            end--;
        }
        if(start == end){
            ptrArray[end].next = null;
            node.next = ptrArray[end];
        } 
        return dummy.next;
    }
}
