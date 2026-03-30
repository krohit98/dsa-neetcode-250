class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // SLIDING WINDOW - prefix sum

        // init sum to MIN INT
        let res = Number.MIN_SAFE_INTEGER;
        let sum = 0;

        // run loop from i=0 to i<nums.length
        for(let i=0;i<nums.length;i++){
            // if nums[i] > sum
            if(sum < 0){
                // sum = nums[i]
                sum = 0;
            }
            // add nums[i] to sum
            sum+=nums[i];
            res = Math.max(res,sum)
        }

        // return sum
        return res;
    }
}
