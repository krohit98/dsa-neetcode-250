class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        //  SLIDING WINDOW
        // initialise result to MAX INT
        let result = Number.MAX_SAFE_INTEGER;
        // initialise sum and winStart to 0;
        let sum = 0;
        let winStart = 0;
        // run loop from winEnd=0 to winEnd<nums.length
        for(let winEnd=0; winEnd<nums.length; winEnd++){
            // add nums[winEnd] to sum
            sum+=nums[winEnd];
            // run loop while sum >= target
            while (sum >= target){
                // set result to min of result, j-i+1
                result = Math.min(result, winEnd-winStart+1);
                // subtract nums[winStart] from sum
                sum-=nums[winStart];
                // increment winStart by 1
                winStart++;
            }
        }
        
        // if result <= nums.length, return result, else return 0
        return result <= nums.length ? result : 0;
    }
}
