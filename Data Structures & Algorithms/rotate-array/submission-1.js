class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // BRUTE FORCE
    
        while(k--){
            let rotated = nums[0];
            for(let i=1;i<nums.length;i++){
                let temp = nums[i];
                nums[i] = rotated;
                rotated = temp;
            }
            nums[0] = rotated;
        }
    }
}
