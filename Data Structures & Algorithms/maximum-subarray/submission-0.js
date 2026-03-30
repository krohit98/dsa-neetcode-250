class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // BRUTE FORCE

        // init result var to MIN INT
        let result = Number.MIN_SAFE_INTEGER;

        // run loop from i=0 to i<nums.length
        for(let i=0;i<nums.length;i++){
            // init sum var to 0
            let sum = 0;
            // run loop from j=i to j<nums.length
            for(let j=i;j<nums.length;j++){
                // add nums[j] to sum
                sum+=nums[j];
                // put result equal to max of result, sum
                result = Math.max(result, sum);
            }
        }
        // return result
        return result;
    }
}
