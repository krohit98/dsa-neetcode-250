class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // run loop for i=0 to i<nums.length
        for(let i=0; i<nums.length; i++){
            // initialize index = nums[i]-1
            let index = Math.abs(nums[i])-1;
            // if nums[index] < 0, return nums[i]
            if(nums[index]<0) return Math.abs(nums[i]);
            // else nums[index] *= -1;
            else nums[index] *= -1;
        }
    }
}
