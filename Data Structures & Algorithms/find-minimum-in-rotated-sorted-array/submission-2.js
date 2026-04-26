class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length == 1 || nums[0]<nums[nums.length-1]) return nums[0];
        let start = 0, end = nums.length-1;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            if(mid > 0 && nums[mid-1]>nums[mid]) return nums[mid];
            else if(nums[0] > nums[mid]) end = mid-1;
            else if(nums[nums.length-1] < nums[mid]) start = mid+1;
        }
    }
}
