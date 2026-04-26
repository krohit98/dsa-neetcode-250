class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        nums = Array.from(new Set(nums));
        let start = 0, end = nums.length-1;
        let minIndex = this.getMinIndex(nums);
        if(minIndex){
            if(target >= nums[0]){
                end = minIndex-1;
            }
            else start = minIndex;
        }

        while(start<=end){
            let mid = Math.floor((start+end)/2);
            if(nums[mid] == target) return true;
            else if(nums[mid]>target) end = mid-1;
            else start = mid+1
        }
        return false;
    }

    getMinIndex(nums){
        // already sorted
        if(nums[0] < nums[nums.length-1]) return 0;

        let start = 0, end = nums.length-1;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            if(mid>0 && nums[mid]<nums[mid-1]) return mid;
            else if(nums[mid]<nums[0]) end = mid-1;
            else start = mid+1
        }
    }
}
