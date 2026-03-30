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
        let pointerArr = new Array();
        let temp = head;
        while(temp){
            pointerArr.push(temp);
            temp = temp.next;
        }

        let start = 0, end = pointerArr.length - 1;

        while(start < end-1){
            pointerArr[start].next = pointerArr[end];
            start++;

            pointerArr[end].next = pointerArr[start];
            end--;
        }

        pointerArr[end].next = null;
    }
}
