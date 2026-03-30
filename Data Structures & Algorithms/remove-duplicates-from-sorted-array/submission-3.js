class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // TWO POINTERS

        // init start at 1
        let start = 1;
        // run loop from end=1 to end<nums.length
        for(let end=1;end<nums.length;end++ ){
            // if nums[end] not equals nums[end-1]
            if(nums[end] != nums[end-1]){
                // set nums[start] to nums[end]
                nums[start] = nums[end];
                // increment start by 1
                start++;
            }
        }

        // return start
        return start;
    }
}
