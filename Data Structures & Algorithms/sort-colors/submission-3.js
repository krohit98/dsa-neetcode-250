class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let start = 0, end = nums.length-1;
        for(let i=0;i<=end;i++){
            if(nums[i] == 0){
                [nums[start],nums[i]] = [nums[i],nums[start]];
                start++;
            }
            if(nums[i] == 2){
                [nums[end],nums[i]] = [nums[i],nums[end]];
                end--;
                i--;
            }
        }
    }
}
