class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // function to perform binary search on a sorted segment to find the target
    searchTarget(nums, start, end, target){
        // run loop while start <= end
        while(start <= end){
            // calculate mid
            let mid = Math.ceil((start+end)/2);
            // if nums[mid] equals to target
            if(nums[mid] == target)
                // return mid
                return mid;
            // else if nums[mid] > target
            else if(nums[mid] > target)
                // set end to mid-1
                end = mid-1;
            // else
            else
                // set start to mid+1
                start = mid+1;
        }
        // return -1
        return -1;
    }

    search(nums, target) {
        // if nums contain only 1 element
        if(nums.length == 1){
            // if first element equal to target, return 0
            if(nums[0] == target) return 0;
            // else return -1
            else return -1;
        }

        // initialize start and end pointer variables
        let start = 0, end = nums.length - 1;

        // if first element is smaller than last element, array is already sorted.
        if(nums[start] < nums[end])
            // call searchTarget to find target and return
            return this.searchTarget(nums, start, end, target);

        // initialize deflection point variable
        let deflectionPoint;

        // run loop while start <= end
        while(start <= end){
            // calculate mid
            let mid = Math.ceil((start+end)/2);
            // if mid>0 && nums[mid]<nums[mid-1]
            if(mid > 0 && nums[mid]<nums[mid-1]){
                // set deflection point variable to mid
                deflectionPoint = mid;
                break;
            }
            // else if first element > nums[mid] (move left)
            else if(nums[0] > nums[mid])
                // set end to mid-1
                end = mid-1;
            // else (move right)
            else
                // set start to mid+1
                start = mid+1;
        }

        // search for target in first sorted segment
        let result = this.searchTarget(nums, 0, deflectionPoint-1, target);
        // if target found, return index
        if(result != -1) return result;

        // search for target in second sorted segment and return output
        return this.searchTarget(nums, deflectionPoint, nums.length-1, target);
    }
}
