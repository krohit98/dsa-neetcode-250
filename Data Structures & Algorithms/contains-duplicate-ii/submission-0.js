class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // run loop from i=0 to i<nums.length
        for(let i=0;i<nums.length;i++){
            // run loop from j=i+1 to j<nums.length
            for(let j=i+1;j<nums.length;j++){
                // if nums[i] equals nums[j] and abs(i-j) <= k
                if(nums[i] == nums[j] && Math.abs(i-j) <= k)
                    // return true
                    return true;
            }
        }

        // return false
        return false;
    }
}
