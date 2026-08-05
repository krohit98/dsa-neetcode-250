class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.pq = new MaxPriorityQueue();
        this.k = k;
        for(let i=0;i<nums.length;i++) {
            this.pq.push(nums[i]);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pq.push(val);
        return this.pq.toArray()[this.k-1];
    }
}
