class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        let subset = [];
        let sum = 0;

        let resultSet = new Set();

        function backtrack(start) {
            if(sum == target) {
                result.push([...subset])
            }

            for(let i=start; i<nums.length; i++){
                if(sum + nums[i] <= target) {
                    subset.push(nums[i]);
                    sum += nums[i];
                    backtrack(i);
                    sum -= nums[i];
                    subset.pop();
                }
            }
        }

        backtrack(0);
        return result;
    }
}
