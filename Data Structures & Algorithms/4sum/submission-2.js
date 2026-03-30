class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        // SORT + TWO POINTER

        // init result array
        let result = [];

        // sort nums -> -1,-1,-1,1,1,1
        nums.sort((a,b)=>a-b);

        // run loop from i=0 to i<nums.length-3
        for(let i=0;i<nums.length-3;i++){
            // if i>0 and nums[i] equals nums[i-1], continue to next iteration
            if(i>0 && nums[i] == nums[i-1]) continue;
            // run loop from j=i+1 to j<nums.length-2
            for(let j=i+1;j<nums.length-2;j++){
                // if j>i+1 and nums[j] equals nums[j-1], continue to next iteration
                if(j>i+1 && nums[j] == nums[j-1]) continue;
                // init remainingSum to target - (nums[i]+nums[j])
                let remainingSum = target - (nums[i]+nums[j]);
                // init start to j+1, end to nums.length-1
                let start = j+1;
                let end = nums.length-1;
                // run loop while start < end
                while(start<end){
                    // init sum to nums[start]+nums[end]
                    let sum = nums[start]+nums[end];
                    // if sum equals remainingSum
                    if(sum == remainingSum){
                        // push [nums[i],nums[j],nums[start],nums[end]] to result
                        result.push([nums[i],nums[j],nums[start],nums[end]]);
                        // increment start by 1
                        start++;
                        // decrement end by 1
                        end--;
                        // run loop while start < end and nums[start] equals nums[start-1]
                        while(start<end && nums[start]==nums[start-1]){
                            // increment start by 1
                            start++;
                        }
                    }

                    // else if sum < remainingSum, increment start by 1
                    else if(sum < remainingSum) start++;
                    // else decrement end by 1
                    else end--;
                }
            }
        }

        // return result
        return result;
    }
}
