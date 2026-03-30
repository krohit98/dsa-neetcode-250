class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // SLIDING WINDOW - prefix sum

        // init sum var to 0;
        let sum = 0;
        // init result var to INT MIN
        let result = Number.MIN_SAFE_INTEGER;

        // run loop from i=0 to i<nums.length
        for(let i=0;i<nums.length;i++){
            // if sum < 0
            if(sum < 0){
                // put sum equal to 0
                sum = 0;
            }

            // add nums[i] to sum
            sum+=nums[i];
            // put result equal to max of result,sum
            result = Math.max(result, sum)
        }

        // return result
        return result;
    }
}
