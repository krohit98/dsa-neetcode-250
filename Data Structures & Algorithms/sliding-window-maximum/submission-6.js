class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let start = 0, windowMax = Number.MIN_SAFE_INTEGER;

        for(let i=0;i<k;i++) {
            windowMax = Math.max(windowMax, nums[i]);
        }

        result.push(windowMax);

        for(let end=k; end<nums.length; end++) {
            if(windowMax == nums[start]) {
                windowMax = Number.MIN_SAFE_INTEGER;
                for(let i=start+1;i<=end;i++) {
                    windowMax = Math.max(windowMax, nums[i]);
                }
            }
            else {
                windowMax = Math.max(windowMax, nums[end]);
            }
            start++;
            result.push(windowMax);
        }

        return result;
    }
}
