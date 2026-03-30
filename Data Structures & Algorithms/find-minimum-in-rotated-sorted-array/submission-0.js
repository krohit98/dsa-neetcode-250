class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // if first element greater than last, array has rotated for the whole 
        // length to its original position. First element is smallest. 
        if(nums[nums.length-1] > nums[0]) return nums[0];
        // if nums contain only 1 element
        if(nums.length == 1) return nums[0];

        // initialize start and end pointer variables
        let start = 0, end = nums.length-1;

        // run loop while start <= end
        while(start<=end){
            // calculate mid
            let mid = Math.ceil((start+end)/2);
            // if mid > 0 and nums[mid] < nums[mid-1]
            if(mid>0 && nums[mid] < nums[mid-1])
                // return nums[mid]
                return nums[mid];
            // else if nums[0] > nums[mid] (move left)
            else if(nums[0] > nums[mid])
                // set end to mid-1
                end = mid-1;
            // else (move right)
            else
                // set start to mid+1
                start = mid+1;
        }

    }
}
