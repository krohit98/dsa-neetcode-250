class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //SORT + TWO POINTERS

        // init result array to empty array
        let result = [];

        // sort nums
        nums.sort((a,b)=>a-b);

        // init n to nums.length;
        let n = nums.length;

        // run loop from i=0 to i<n-2
        for(let i=0;i<n-2;i++){
            // if i>0 and nums[i] equals nums[i-1], continue to next iteration
            if(i>0 && nums[i]==nums[i-1]) continue;
            // init remainingSum to target - nums[i]
            let remainingSum = 0-nums[i];
            // init start to i+1, end to n-1
            let start = i+1, end = n-1;
            // run loop while start < end
            while(start < end){
                // init sum to nums[start]+nums[end]
                let sum = nums[start]+nums[end];
                // if sum equals remainingSum
                if(sum == remainingSum){
                    // add [nums[i], nums[start], nums[end]] to result
                    result.push([nums[i], nums[start], nums[end]]);
                    // increment start by 1
                    start++;
                    // decrement end by 1
                    end--;
                    // run loop while start < end and nums[start] equals nums[start-1]
                    while(start < end && nums[start] == nums[start-1]){
                        // increment start
                        start++;
                    }
                }
                // else if sum < remainingSum
                else if(sum < remainingSum){
                    // increment start by 1
                    start++;
                }
                // else
                else{
                    // decrement end by 1
                    end--;
                }
            }
        }
        // return result
        return result;
    }
}
