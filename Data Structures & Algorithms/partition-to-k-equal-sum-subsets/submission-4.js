class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = 0;
        let freqMap = {};
        for(let i=0;i<nums.length;i++) {
            sum += nums[i];
            freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
        }
        if (sum % k !== 0) return false;
        
        let target = sum/k;

        nums.sort((a,b) => b-a);

        function backtrack(start, k, subsetSum) {
            if(k == 0) return true;
            if(subsetSum === target) {
                return backtrack(0, k-1, 0);
            }
            let visited = new Set();
            for(let i=start; i<nums.length;i++) {
                if(visited.has(nums[i]) || freqMap[nums[i]] <= 0 || subsetSum + nums[i] > target) continue;
                visited.add(nums[i]);
                freqMap[nums[i]]--;
                if(backtrack(i+1, k, subsetSum+nums[i])) return true;
                freqMap[nums[i]]++;
            }
            return false;
        }

        return backtrack(0, k, 0);
    }
}
