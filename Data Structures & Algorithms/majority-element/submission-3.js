class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let result = 0;
        let freqMap = {};
        let maxFreq = 0;
        for(let i=0;i<nums.length;i++){
            freqMap[nums[i]] = (freqMap[nums[i]] || 0)+1;
            if(freqMap[nums[i]] > maxFreq){
                maxFreq = freqMap[nums[i]];
                result = nums[i]
            }
        }

        return result;
    }
}
