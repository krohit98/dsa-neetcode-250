class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [], subset = [];

        nums.sort((a,b) => a-b);

        function backtrack(start) {
            result.push([...subset]);

            for(let i=start; i<nums.length; i++) {

                subset.push(nums[i]);
                backtrack(i+1);


                subset.pop()
                while(nums[i+1] == nums[i]) i++;
            }
        }
        backtrack(0);
        return result;
    }
}
