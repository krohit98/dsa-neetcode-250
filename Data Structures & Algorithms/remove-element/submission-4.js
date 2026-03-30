class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0;
        let i=0, j=nums.length-1;
        while(nums[j]==val) {count++; j--;}
        while(i<j){
            while(nums[j]==val) {count++; j--;}
            if(nums[i] == val){
                count++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j--;
            }
            i++;
        }
        return nums.length - count;
    }
}
