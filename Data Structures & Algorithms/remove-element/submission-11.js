class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let start = 0;
        let end = 0;

        while(end<nums.length){
            if(nums[end] != val){
                [nums[start],nums[end]] = [nums[end],nums[start]];
                start++;
            }
            end++;
        }
        return start;
    }
}
