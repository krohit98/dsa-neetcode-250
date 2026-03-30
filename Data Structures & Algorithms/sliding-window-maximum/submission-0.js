class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];

        for(let i=0;i<=nums.length - k;i++){
            let max = nums[i];
            for(let j=i;j<i+k;j++){
                max = Math.max(max, nums[j])
            }
            result.push(max);
        }
        return result;
    }
}
