class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // initialize result array and max heap variable
        let maxElementArr = [], maxHeap = new MaxPriorityQueue(x => x[0]);

        // run loop form end = 0 to end < nums.length
        for(let end = 0; end<nums.length; end++){
            // insert [nums[end],end] in max heap
            maxHeap.enqueue([nums[end],end]);

            // if end is greater than or equal to k-1
            if(end >= k-1){
                // while top of heap contains elements that are out of the window, dequeue
                while(maxHeap.front()[1] <= end-k){
                    maxHeap.dequeue();
                }
                // add top of heap to result array
                maxElementArr.push(maxHeap.front()[0])
            }
        }

        // return result array
        return maxElementArr;
    }
}
