class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // TWO POINTER

        // init rotations equal to k mod nums.length (if k>nums.length) or k
        let rotations = k > nums.length ? k % nums.length : k;

        // init start to 0
        let start = 0;
        // init end to rotations
        let end = rotations;

        // run loop while end < nums.length
        while(end < nums.length){
            // if nums[start] is array
            if(Array.isArray(nums[start])){
                // replace nums[end] with [nums[start][1], nums[end]]
                nums[end] = [nums[start][1], nums[end]];
                // replace nums[start] with nums[start][0]
                nums[start] = nums[start][0];
            }
            // else
            else{
                // replace nums[end] with [nums[start], nums[end]]
                nums[end] = [nums[start], nums[end]];
            }
            start++;
            end++;
        }

        // set start to rotations
        start = rotations;
        
        // run loop while start >= 0
        while(start >= 0){
            // if nums[end] is array
            if(Array.isArray(nums[end])){
                // replace nums[start] with [nums[end][1], nums[start]]
                nums[start] = [nums[end][1], nums[start]];
                // replace nums[end] with nums[end][0]
                nums[end] = nums[end][0];
            }
            start--;
            end--;
        }

        while(end >= 0){
            if(Array.isArray(nums[end])) nums[end] = nums[end][0];
            end--;
        }

    }
}
