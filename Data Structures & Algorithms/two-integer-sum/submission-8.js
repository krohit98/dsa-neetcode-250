class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = {};

        for(let i=0; i<nums.length; i++) {
            numMap[nums[i]] = i;
        }

        for(let i=0; i<nums.length; i++) {
            let toFind = target - nums[i]
            if(numMap[toFind] && numMap[toFind] !== i){
                return [i, numMap[toFind]]
            }
        }
    }
}
