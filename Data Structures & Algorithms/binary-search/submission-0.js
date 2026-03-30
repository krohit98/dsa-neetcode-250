class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length;

        let start = 0, end = n-1;

        while(start <= end){
            let mid = Math.ceil((start+end)/2);

            if(nums[mid] == target) return mid;

            else if(nums[mid] > target) end = mid-1;
            else start = mid+1;
        }

        return -1;
    }
}
