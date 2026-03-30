class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // SORT + TWO POINTER

        // init result array
        let result = [];

        // sort nums 
        nums.sort((a,b) => a-b);
        // run loop from i=0 to i<nums.length-2
        for(let i=0;i<nums.length-2;i++){
            // if i>0 and nums[i] equals nums[i-1], continue to next iteration
            if(i>0 && nums[i]==nums[i-1]) continue;
            // init target to 0 - nums[i]
            let target = 0-nums[i];
            // init start to i+1
            let start = i+1;
            // init end to nums.length-1
            let end = nums.length-1;
            // run loop while start<end
            while(start<end){
                // init sum equal to nums[start]+nums[end]
                let sum = nums[start]+nums[end];
                // if sum equals target
                if(sum == target){
                    // add [nums[i],nums[start],nums[end]] to result array
                    result.push([nums[i],nums[start],nums[end]]);
                    // increment start
                    start++;
                    // decrement end
                    end--;
                    while(start < end && nums[start] == nums[start-1]) start++;
                }
                // else if sum > target
                else if(sum > target)
                    // decrement end by 1
                    end--;
                // else
                else
                    //increment start by 1
                    start++;
            }
        }

        // return result
        return result;
    }
}
