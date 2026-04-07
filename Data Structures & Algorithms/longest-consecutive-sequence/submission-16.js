class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let maxCount = 0;
        for(let i=0;i<nums.length;i++){
            if(numsSet.has(nums[i]-1)) continue;
            let num = nums[i];
            let count = 1;
            while(numsSet.has(++num)){
                count++;
            }
            maxCount = Math.max(maxCount,count);
        }
        return maxCount;
    }
}
