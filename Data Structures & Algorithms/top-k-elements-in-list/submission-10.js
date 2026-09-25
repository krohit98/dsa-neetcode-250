class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        for(let i=0;i<nums.length;i++) {
            freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
        }

        let pq = new MinPriorityQueue((a) => a.freq);

        for(let [num,freq] of Object.entries(freqMap)) {
            pq.push({num, freq});
            if(pq.size() > k){
                pq.pop();
            }
        }

        let topK = [];
        while(pq.size()) {
            topK.push(pq.pop().num);
        }

        return topK;
    }
}
