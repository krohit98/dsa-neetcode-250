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
        // initialize dummy ListNode and k pointer variable 
        let dummy = new ListNode();
        let k = dummy;

        // initialize temp variable
        let temp;

        // run loop while both list1 and list2 are not null
        while(list1 && list2){
            // if value of list1 <= value of list2
            if(list1.val <= list2.val){
                // set temp to list1.next
                temp = list1.next;
                // set list1.next to null
                list1.next = null;
                // set k.next to list1
                k.next = list1;
                // set list1 to temp
                list1 = temp;
            }
            // else
            else{
                // set temp to list2.next
                temp = list2.next;
                // set list2.next to null
                list2.next = null;
                // set k.next to list2
                k.next = list2;
                // set list2 to temp
                list2 = temp;
            } 
            // set k to k.next
            k = k.next;
        }

        // run loop while list1 is not null
        while(list1){
            // set temp to list1.next
            temp = list1.next;
            // set list1.next to null
            list1.next = null;
            // set k.next to list1
            k.next = list1;
            // set list1 to temp
            list1 = temp;
            // set k to k.next
            k = k.next;
        }

        // run loop while list2 is not null
        while(list2){
            // set temp to list2.next
            temp = list2.next;
            // set list2.next to null
            list2.next = null;
            // set k.next to list2
            k.next = list2;
            // set list2 to temp
            list2 = temp;
            // set k to k.next
            k = k.next;
        }

        // return dummy.next
        return dummy.next;
    }
}
