class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numMap = {};

        for(let i=0;i<nums.length;i++) {
            numMap[nums[i]] = "false";
        }

        let maxCount = 0;

        for(let i=0; i<nums.length;i++) {
            let count = 0;
            let curr = nums[i];
            if(numMap[curr] == "true") continue;
            
            while(numMap[curr++]) {
                count++;
                numMap[curr-1] = "true";
            }
            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}
