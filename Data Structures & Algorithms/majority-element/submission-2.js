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
            let updatedFreq = (freqMap[nums[i]] || 0)+1;
            freqMap[nums[i]] = updatedFreq
            if(updatedFreq > maxFreq){
                maxFreq = updatedFreq;
                result = nums[i]
            }
        }

        return result;
    }
}
