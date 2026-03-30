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
        let pq = new MaxPriorityQueue(uniqueChars => uniqueChars.value);
        Object.keys(uniqueChars).forEach(key => {
            pq.enqueue({key:key,value:uniqueChars[key]});
        })
        console.log(pq.front())
        while(k--){
            result.push(pq.dequeue().key);
        }
        return result;
    }
}
