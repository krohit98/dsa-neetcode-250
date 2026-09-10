class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
       let start = 0, window = new Set();

       for(let end = 0; end < nums.length; end++) {
            if (window.has(nums[end])) return true;
            window.add(nums[end]);
            if (Math.abs(end+1-start) > k) {
                window.delete(nums[start++]);
            }
       }
        return false;
    }
}
