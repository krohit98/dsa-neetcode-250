class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let pq = new MinPriorityQueue();
        for(let i=0;i<nums.length;i++) {
            pq.enqueue(nums[i]);
            if(pq.size() > k) pq.dequeue();
        }

        return pq.dequeue();
    }
}
