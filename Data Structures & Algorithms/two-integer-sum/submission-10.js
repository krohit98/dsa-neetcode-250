class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();

        for(let i=0; i<nums.length; i++) {
            let toFind = target - nums[i];
            if(numMap.has(toFind)) {
                return [i, numMap.get(toFind)];
            }
            else numMap.set(nums[i],i);
        }

        return [];
    }
}
