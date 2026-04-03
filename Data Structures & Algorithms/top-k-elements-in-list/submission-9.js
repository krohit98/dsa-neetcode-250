class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        for(let i=0;i<nums.length;i++){
            freqMap[nums[i]] = (freqMap[nums[i]] || 0)+1;
        }
        let pq = new MinPriorityQueue(obj => obj.value);
        let count = 0;
        for(let [key,value] of Object.entries(freqMap)){
            pq.enqueue({key,value});
            count++;
            if(count>k){
                pq.dequeue();
            }
        }
        let result = [];
        while(k--){
            result.push(pq.dequeue().key);
        }
        return result;
    }
}
