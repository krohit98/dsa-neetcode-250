class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums = [...nums1, ...nums2];
        nums.sort((a,b)=>a-b);

        if(nums.length % 2 == 0){
            let mid = Math.floor((nums.length-1)/2);
            return (nums[mid]+nums[mid+1])/2;
        }
        else return nums[(nums.length-1)/2];
    }
}
