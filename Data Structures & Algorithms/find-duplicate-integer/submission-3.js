class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            let curr = Math.abs(nums[i]);
            if(nums[curr-1] < 0) return curr;
            else nums[curr-1] = 0 - nums[curr-1];
        }
    }
}
