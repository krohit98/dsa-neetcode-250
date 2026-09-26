class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];
        let freqMap = {};

        for(let i=0; i<nums.length; i++) {
            freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
        }

        let bucket = new Array(nums.length).fill(null);

        for(let [num, freq] of Object.entries(freqMap)) {
            if(!bucket[freq]) bucket[freq] = [];
            bucket[freq].push(num);
        }

        for(let i=nums.length; i>=0; i--) {
            if(bucket[i]) {
                for(let j=0;j<bucket[i].length;j++) {
                    result.push(bucket[i][j]);
                    if(result.length == k) return result;
                }
            }
        }
    }
}
