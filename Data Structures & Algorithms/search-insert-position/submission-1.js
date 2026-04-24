class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let start = 0, end = nums.length-1;

        while(start<=end){
            let mid = Math.floor((start+end)/2);
            if(nums[mid] < target){
                if(mid+1 == nums.length || nums[mid+1] > target) return mid+1;
                else start = mid+1;
            }
            else if(nums[mid] > target){
                if(mid == 0) return 0;
                else end = mid-1;
            }
            else return mid;
        }
    }
}
