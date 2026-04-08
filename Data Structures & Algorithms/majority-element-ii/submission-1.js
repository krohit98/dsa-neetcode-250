class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let freqMap = {};
        let majorityElementSet = new Set();
        for(let i=0;i<nums.length;i++){
            freqMap[nums[i]] = (freqMap[nums[i]] || 0)+1;
            if(freqMap[nums[i]] > Math.floor(nums.length/3)){
                majorityElementSet.add(nums[i]);
            }
        }
        return Array.from(majorityElementSet);
    }
}
