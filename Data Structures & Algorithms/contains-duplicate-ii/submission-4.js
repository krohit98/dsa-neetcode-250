class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let duplicateMap = {};

        for(let i=0;i<nums.length;i++){
            if(duplicateMap[nums[i]] && Math.abs(parseInt(duplicateMap[nums[i]]) - i) <= k) return true;
            else duplicateMap[nums[i]] = `${i}`;
        }
        return false;
    }
}
