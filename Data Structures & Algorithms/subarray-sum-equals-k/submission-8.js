class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixMap = {0:1};
        let count=0, sum=0;
        for(let i=0;i<nums.length;i++){
            sum+=nums[i];
            let startSum = sum - k;
            count+=prefixMap[startSum] || 0;
            prefixMap[sum] = (prefixMap[sum] || 0)+1;
        }
        return count;
    }
}
