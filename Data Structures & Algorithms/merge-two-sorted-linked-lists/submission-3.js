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
        let result = new ListNode();
        let k = result;
        while(list1 && list2){
            if(list1.val <= list2.val){
                k.next = list1;
                list1 = list1.next;
            }
            else{
                k.next = list2;
                list2 = list2.next;
            }
            k = k.next;
        }

        while(list1){
            k.next = list1;
            list1 = list1.next;
            k = k.next;
        }

        while(list2){
            k.next = list2;
            list2 = list2.next;
            k = k.next;
        }

        return result.next;
    }
}
