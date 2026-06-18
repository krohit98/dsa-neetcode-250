class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // init empty set
        let range = new Set();
        // init start to 0
        let start = 0;

        // run loop for end = 0 to end < nums.length
        for(let end=0; end<nums.length; end++){
            // check if length of set equals k+1
            if(range.size == k+1){
                // remove nums[start] from set
                range.delete(nums[start])
                // increment start
                start++;
            }
            // check if nums[end] exists in set
            if(range.has(nums[end]))
                // return true
                return true;
            // else
            else
                // add nums[end] to set
                range.add(nums[end]);
        }

        // return false
        return false;
    }
}
