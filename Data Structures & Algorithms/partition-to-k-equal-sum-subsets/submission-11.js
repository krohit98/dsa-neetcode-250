class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = 0;
        for(let i=0; i<nums.length; i++) {
            sum += nums[i];
        }

        if(sum % k !== 0) return false;

        let target = sum / k;
        let used = new Set();

        function backtrack(currentSum, completedBuckets) {
            if(completedBuckets == k) return true;

            if(currentSum == target) {
                return backtrack(0, completedBuckets+1)
            }

            let visited = new Set();

            for(let i=0; i<nums.length;i++) {
                if(used.has(i) || visited.has(nums[i]) || nums[i]+currentSum > target) continue;

                used.add(i);
                visited.add(nums[i]);
                if(backtrack(currentSum+nums[i], completedBuckets)) return true;
                used.delete(i);
            }

            return false;
        }
        
        return backtrack(0,0);
    }
}
