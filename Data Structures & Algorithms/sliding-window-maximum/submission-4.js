class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        /* Monotonic Decreasing Queue */
        
        // initialize start, result array and deque
        let start = 0, maxElementArr = [], deque = new Deque();

        // run loop from end = 0 to end < nums.length
        for(let end = 0; end < nums.length; end++){
            // while nums[end] > deque.back
            while(nums[end] > nums[deque.back()])
                // pop from back of deque
                deque.popBack();

            // push nums[end] at back of deque
            deque.pushBack(end);

            // if start is greater then front of deque
            if(start > deque.front()){
                // pop from front of deque
                deque.popFront();
            }

            // if end + 1 >= k
            if(end + 1 >= k){
                // push front of deque to result array
                maxElementArr.push(nums[deque.front()]);
                // increment start by 1
                start++;
            }
        }

        // return result
        return maxElementArr;
    }
}
