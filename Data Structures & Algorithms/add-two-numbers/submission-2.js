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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let node = dummy;
        let carry = 0;
        while(l1 && l2){
            let sum = l1.val + l2.val + carry; //18
            carry = parseInt(sum/10);
            node.next = new ListNode(sum%10);
            node = node.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        while(l1){
            let sum = l1.val + carry;
            carry = parseInt(sum/10);
            node.next = new ListNode(sum%10);
            node = node.next;
            l1 = l1.next;
        }

        while(l2){
            let sum = l2.val + carry;
            carry = parseInt(sum/10);
            node.next = new ListNode(sum%10);
            node = node.next;
            l2 = l2.next;
        }

        if(carry){
            node.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
