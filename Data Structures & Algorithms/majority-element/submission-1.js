class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let result = 0;
        let freqMap = {};
        for(let i=0;i<nums.length;i++){
            freqMap[nums[i]] = (freqMap[nums[i]] || 0)+1;
        }
        let maxFreq = 0;
        Object.entries(freqMap).forEach(([num,freq]) => {
            if(freq>maxFreq){
                maxFreq = freq;
                result = num;
            }
        })
        return result;
    }
}
