class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        let subsets = [];

        function backtrack(start) {
            result.push([...subsets]);

            for(let i=start; i<nums.length; i++) {
                subsets.push(nums[i]);
                backtrack(i+1);

                subsets.pop();
            }
        }
        backtrack(0);

        return result;
    }
}
