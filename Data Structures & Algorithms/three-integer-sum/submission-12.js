class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);

        let result = [];
        for(let i=0; i<nums.length; i++) {
            if(i>0 && nums[i] == nums[i-1]) continue;
            let start = i+1;
            let end = nums.length-1;
            while(start < end) {
                let sum = nums[i] + nums[start] + nums[end];
                if(sum == 0) {
                    result.push([nums[i], nums[start], nums[end]]);
                    start++, end--;
                    while(start < end && nums[start] === nums[start-1]) start++;
                    while(start < end && nums[end] === nums[end+1]) end--;
                }
                else if(sum > 0) {
                    end--
                }
                else start++;
            }
        }

        return result;
    }
}
