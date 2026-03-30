class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // init new hash set
        let winElements = new Set();
        // init winStart variable to 0
        let winStart = 0;

        // run loop from winEnd=0 to winEnd<nums.length
        for(let winEnd=0; winEnd<nums.length; winEnd++){

            // if winEnd-winStart > k
            if(winEnd - winStart > k){
                // remove nums[winStart] from set
                winElements.delete(nums[winStart]);
                // increment winStart
                winStart++;
            }

            // if nums[winEnd] exists in set, return true
            if(winElements.has(nums[winEnd])) return true;
            // else add nums[winEnd] to set
            else winElements.add(nums[winEnd]);
        }

        // return false
        return false;
    }
}
