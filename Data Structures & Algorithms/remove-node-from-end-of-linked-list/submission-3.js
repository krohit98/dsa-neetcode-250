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
        let node = head;
        let temp = null;
        while(node.next){
            n--;
            node = node.next;
            if(n==0) temp = head;
            else if(n<0) temp = temp.next;
        }
        console.log(temp);
        if(!temp) head = head.next;
        else temp.next = temp?.next?.next || null;
        return head;
    }
}
