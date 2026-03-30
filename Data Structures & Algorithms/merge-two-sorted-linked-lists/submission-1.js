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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // initialize dummy ListNode and node pointer variable 
        let dummy = new ListNode();
        let node = dummy;

        // run loop while both list1 and list2 are not null
        while(list1 && list2){
            // if value of list1 <= value of list2
            if(list1.val <= list2.val){
                // set node.next to list1
                node.next = list1;
                // set list1 to list1.next
                list1 = list1.next;
            }
            // else
            else{
                // set node.next to list2
                node.next = list2;
                // set list1 to list2.next
                list2 = list2.next;
            } 
            // set k to k.next
            node = node.next;
        }

        // if list1 is not null, set node.next to list1
        if(list1) node.next = list1;
        // else (if list2 is not null), set node.next to list2
        else node.next = list2

        // return dummy.next
        return dummy.next;
    }
}
