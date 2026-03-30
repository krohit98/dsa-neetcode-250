class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        //  BRUTE FORCE
        // initialise result to MAX INT
        let result = Number.MAX_SAFE_INTEGER;
        // run loop from i=0 to i<nums.length
        for(let i=0;i<nums.length;i++){
            // init sum to 0
            let sum=0;
            // run loop from j=i to j<nums.length
            for(let j=i;j<nums.length;j++){
                // add nums[j] to sum
                sum+=nums[j];
                // if sum >= target
                if(sum >= target){
                    // set result to min of result, j-i+1
                    result = Math.min(result, j-i+1);
                    // break the inner loop
                    break;
                }
            }
        }
        
        // if result <= nums.length, return result, else return 0
        return result <= nums.length ? result : 0;
    }
}
