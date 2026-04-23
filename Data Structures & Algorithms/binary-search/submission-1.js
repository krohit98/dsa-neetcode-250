class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(nums,0,nums.length-1,target);
    }

    binarySearch(nums,start,end,target){
        if(start > end) return -1; 
        let mid = Math.floor((start+end)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid]>target) return this.binarySearch(nums,start,mid-1,target);
        else return this.binarySearch(nums,mid+1,end,target);
    }
}
