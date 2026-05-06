class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let start = 0, end = nums.length-1;
        while(start<=end){
            console.log('start:',nums[start], ' end:', nums[end])
            let mid = Math.floor((start+end)/2);
            if(nums[mid] == target) return true;

            if(nums[start] == nums[mid] || nums[mid] == nums[end]){
                while(nums[start] == nums[mid]) start++;
                while(nums[mid] == nums[end]) end--;
                continue;
            }

            if(nums[start] <= nums[mid]){
                if(nums[start] <= target && target < nums[mid]) end = mid-1;
                else start = mid+1;
            }
            else{
                if(nums[mid] < target && target <= nums[end]) start = mid+1;
                else end = mid-1;
            }
        }
        return false;
    }
}
