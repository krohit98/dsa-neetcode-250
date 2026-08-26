class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [], subset = [];

        function backtrack(visited) {
            if(subset.length === nums.length) result.push([...subset]);

            for(let i=0;i<nums.length;i++) {
                if(visited.has(nums[i])){
                    continue;
                }
                visited.add(nums[i]);
                subset.push(nums[i]);
                backtrack(visited);

                subset.pop();
                visited.delete(nums[i]);
            }
        }
        backtrack(new Set());
        return result;
    }
}
