/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// 1 2 3 4 5 6 => 1 6 2 5 3 4 null
// 1 2 3 4 5 6 7 => 1 7 2 6 3 5 4 null

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // **** use slow and fast pointers to determine the half point of the list ****

        // initialize slow and fast pointer variables
        let slow = head, fast = head.next;
        // run loop while fast.next != null or fast!=null
        while(fast && fast.next){
            // increment slow pointer by 1
            slow = slow.next;
            // increment fast pointer by 2
            fast = fast.next.next;
        }

        // initialize end pointer variable
        let end = null;

        // if fast pointer is not null, even number of nodes present
        if(fast)
            // set end pointer to slow.next
            end = slow.next;
        // else, odd number of nodes present
        else
            // set end pointer to slow
            end = slow;

        // **** reverse the list from end pointer node to last ****

        // initialize prev pointer with null
        let prev = null;
        // run loop while end is not null
        while(end){
            // initialize next pointer variable to point to end.next
            let next = end.next;
            // set end.next to prev
            end.next = prev;
            // set prev to end
            prev = end;
            // set end to next
            end = next;
        }

        // set end to prev
        end = prev;

        // **** reorder list ****

        // initialize start pointer variable to head
        let start = head;

        // run loop while start.next!=end
        while(start != end && start.next != end){
            // ** Reorder from start **
            // initialize temp pointer variable to start.next
            let temp = start.next;
            // set start.next to end
            start.next = end;
            // set start to temp
            start = temp;

            // ** Reorder from end **
            // set temp to end.next
            temp = end.next;
            // set end.next to start
            end.next = start;
            // set end to temp
            end = temp;
        }
    }
}
