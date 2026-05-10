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

        // if only one or two nodes present, return head
        if(!head.next || !head.next.next) return head;

        // find the middle node
        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse the second half
        let node = slow.next;
        let prev = null, next = null;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        slow.next = null;
        
        // reorder
        let list1 = head;
        let list2 = prev;

        console.log(JSON.stringify(list1));
        console.log(JSON.stringify(list2));
        let dummy = new ListNode();
        node = dummy;

        while(list1 && list2){
            node.next = list1;
            node = node.next;
            list1 = list1.next
            node.next = list2;
            node = node.next;
            list2 = list2.next;
        }

        if(list1) node.next = list1;

        console.log(JSON.stringify(dummy));
    }
}
