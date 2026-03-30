class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = {};
        for(let i=0;i<nums.length;i++){
            numsMap[nums[i]] = i
        }
        for(let j=0;j<nums.length;j++){
            let idx = numsMap[target - nums[j]];
            if(idx && idx!=j){
                return [j,idx];
            }
        }
    }
}
