class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // initialize start, result array and max heap variable
        let start = 0, maxElementArr = [], maxHeap = new MaxPriorityQueue(x => x[0]);

        // run loop form end = 0 to end < nums.length
        for(let end = 0; end<nums.length; end++){
            // insert [nums[end],end] in max heap
            maxHeap.enqueue([nums[end],end]);
            // if end >= k
            if(end >= k){
                // remove [nums[start],start] from max heap
                maxHeap.remove(x => x[1] == start)
                // increment start by 1
                start++;
            }

            // if end is greater than or equal to k-1
            if(end >= k-1)
                // add top of heap to result array
                maxElementArr.push(maxHeap.front()[0])

        }

        // return result array
        return maxElementArr;
    }
}
