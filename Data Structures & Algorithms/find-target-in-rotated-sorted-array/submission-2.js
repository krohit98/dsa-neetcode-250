class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0, end = nums.length-1;
        let minIndex = this.getMinIndex(nums);
        console.log(minIndex);
        if(minIndex){
            if(target >= nums[0]){
                end = minIndex-1;
            }
            else start = minIndex;
        }

        while(start<=end){
            let mid = Math.floor((start+end)/2);
            if(nums[mid] == target) return mid;
            else if(nums[mid]>target) end = mid-1;
            else start = mid+1
        }
        return -1;
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