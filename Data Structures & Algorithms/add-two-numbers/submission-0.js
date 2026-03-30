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
        // initialize dummy list node, current pointer and carry variable
        let dummy = new ListNode();
        let current = dummy;
        let carry = 0;
        
        // run loop while l1 or l2 are not null
        while(l1 || l2){
            // add l1.val, l2.val and carry and store in sum variable
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

            // initialize val to sum-10 if sum >= 10, else to sum
            let value = sum >= 10 ? sum - 10 : sum;

            // set carry to 1 if sum >= 10, else 0
            carry = sum >= 10 ? 1 : 0;
            
            // create new node with val
            let node = new ListNode(value);
            // set current.next to node
            current.next = node;
            // set current to current.next
            current = current.next;

            // if l1 is not null, set l1 to l1.next
            if(l1) l1 = l1.next;
            // if l2 is not null, set l2 to l2.next
            if(l2) l2 = l2.next;
        }

        // if carry is 1, set current.next to new node with val = 1
        if(carry) current.next = new ListNode(1);

        // return dummy.next
        return dummy.next;
    }
}
