class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {};

        for(let i=0;i<nums.length;i++){
            numsMap[nums[i]] = i
        }

        for(let i=0;i<nums.length;i++){
            const toFind = numsMap[target - nums[i]];
            if(toFind && i !== toFind){
                return [i, toFind]
            }
        }
    }
}
