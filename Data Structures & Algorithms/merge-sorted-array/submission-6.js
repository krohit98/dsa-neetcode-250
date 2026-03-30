class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // TWO POINTERS

        // init write pointer to nums1.length-1
        let write = nums1.length-1;
        // init p1 to m-1
        let p1 = m-1;
        // init p2 to n-1
        let p2 = n-1;

        // run loop while p2 >= 0
        while(p2>=0){
            // if p1>=0 and nums1[p1] > nums2[p2]
            if(p1>=0 && nums1[p1] > nums2[p2]){
                // Set nums1[write] = nums1[p1]
                nums1[write] = nums1[p1];
                // decrement p1 by 1
                p1--;
            }
            // else
            else{
                // Set nums1[write] = num2[p2]
                nums1[write] = nums2[p2]
                // decrement p2 by 1
                p2--;
            }
            // decrement write by 1
            write--;
        }

    }
}
