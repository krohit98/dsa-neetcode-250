class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let charMap = {};
        for(let i=0;i<nums.length;i++){
            if(charMap[nums[i]]) return true;
            charMap[nums[i]] = (charMap[nums[i]] || 0)+1;
        }
        return false;
    }
}
