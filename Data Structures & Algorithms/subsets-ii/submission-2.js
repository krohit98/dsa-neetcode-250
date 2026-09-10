class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a-b);

        let result = [];
        let subset = [];

        function backtrack(start) {
            result.push([...subset]);
            let visited = new Set();
            for(let i=start; i<nums.length; i++) {
                if(visited.has(nums[i])) continue;
                visited.add(nums[i]);
                subset.push(nums[i]);
                backtrack(i+1);
                subset.pop();
            }
        }

        backtrack(0);
        return result;
    }
}
