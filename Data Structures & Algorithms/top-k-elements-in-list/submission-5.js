class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {};
        for(let i=0;i<nums.length;i++){
            countMap[nums[i]] = countMap[nums[i]] ? countMap[nums[i]]+1:1;
        }
        
        let numsHeap = new MaxPriorityQueue(a => a[1]);

        Object.entries(countMap).forEach(item => {
            numsHeap.enqueue(item);
        })

        let result = [];

        for(let i=0;i<k;i++){
            result[i] = numsHeap.dequeue()[0]
        }

        return result;
    }
}
