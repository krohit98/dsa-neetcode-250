class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // TWO POINTERS

        // init start, end at 1
        let start = 0, end = 0;
        // run loop while end < nums.length
        while(end < nums.length){
            // if nums[end] not equals nums[start]
            if(nums[end] != nums[start]){
                start++;
                // swap nums[end] with nums[start]
                [nums[start], nums[end]] = [nums[end], nums[start]];
                // increment start by 1
                // start++;
            }
            // increment end by 1
            end++;
        }

        // return start
        return start+1;
    }
}
