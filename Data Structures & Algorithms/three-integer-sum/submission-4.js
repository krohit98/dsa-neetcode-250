class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort nums
        nums.sort((a,b)=>a-b);

        // initialize result array
        let result = [];

        let n = nums.length;
        
        // loop over nums and for each element,
        for(let i=0;i<n;i++){
            if(i > 0 && nums[i] == nums[i-1]) continue;
            // set target = 0 - nums[i]
            let target = 0 - nums[i];
            // initialize pointers start = i+1 and end = n-1
            let start = i+1, end = n-1;
            // run loop while start<end
            while(start < end){
                let sum = nums[start]+nums[end]
                // if sum(start+end) value > target, end--
                if(sum > target) end--
                // else if sum < target, start++
                else if(sum < target) start++
                // else (sum = target), add to result
                else {
                    result.push([nums[i], nums[start],nums[end]])
                    start++; 
                    end--;
                    while(start < end && nums[start] == nums[start-1]) start++;
                }
            }
        }
        // return result array
        return result;
    }
}
