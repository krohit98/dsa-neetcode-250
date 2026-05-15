class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let duplicateSet = new Set();
        let start = 0;

        for(let end=0;end<nums.length;end++){
            if(duplicateSet.has(nums[end])) return true;
            else if(duplicateSet.size < k) duplicateSet.add(nums[end]);
            else if(duplicateSet.size == k){
                duplicateSet.delete(nums[start]);
                duplicateSet.add(nums[end]);
                start++;
            }
        }
        return false;
    }
}
