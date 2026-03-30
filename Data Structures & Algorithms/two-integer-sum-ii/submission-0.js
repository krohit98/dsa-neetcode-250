class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // initialize pointers
        let start=0, end=numbers.length-1;

        // run loop while start pointer < end pointer
        while(start < end){
            // if sum = target return index array
            if(numbers[start]+numbers[end] == target) return [start+1,end+1];
            // else if sum > target, end = end-1
            else if(numbers[start]+numbers[end] > target) end--;
            // else (sum < target), start = start+1
            else start++;
        }
    }
}
