class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = []
        let subset = []
        let sum = 0

        candidates.sort()

        function backtrack(start) {
            let visited = new Set();
            if(sum == target) {
                result.push([...subset])
            }

            for(let i=start;i<candidates.length;i++) {
                if(visited.has(candidates[i])) {
                    continue;
                }
                visited.add(candidates[i]);
                if(sum + candidates[i] <= target) {
                    sum += candidates[i];
                    subset.push(candidates[i]);
                    backtrack(i+1);
                    sum -= candidates[i];
                    subset.pop();
                }
            }
        }
        backtrack(0);
        return result;
    }

    
}
