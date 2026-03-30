class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];
        let uniqueChars = {};
        for(let i=0;i<nums.length;i++){
            uniqueChars[nums[i]] = (uniqueChars[nums[i]] || 0)+1;
        }
        console.log(uniqueChars)
        let pq = new MinPriorityQueue(uniqueChars => uniqueChars.value);
        for(const [key,value] of Object.entries(uniqueChars)) {
            pq.enqueue({key,value});
            if(pq.size() > k) pq.dequeue();
        }
        console.log(pq.front())
        while(k--){
            result.push(pq.dequeue().key);
        }
        return result;
    }
}
