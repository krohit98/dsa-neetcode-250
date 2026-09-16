class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = 0;

        for(let i=0;i<nums.length;i++) {
            sum+=nums[i];
        }

        if(sum % k !== 0) return false;

        let target = sum/k;
        let used = new Set();
        let completedBuckets = 0;

        nums.sort((a,b) => b-a);
        if(nums[0] > target) return false;

        function backtrack(currentSum) {
            if(currentSum == target) {
                completedBuckets++;
                if(completedBuckets == k) {
                    return true;
                }
                let res = backtrack(0);
                completedBuckets--;

                return res;
            }
            
            let visited = new Set();
            for(let i=0;i<nums.length;i++) {
                if(used.has(i) || visited.has(nums[i]) || currentSum + nums[i] > target) continue;
                used.add(i);
                visited.add(nums[i]);
                if(backtrack(currentSum + nums[i])) return true;
                used.delete(i);
            }

            return false;
        }

        return backtrack(0);
    }
}
