class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // REVERSAL USING TWO POINTERS

        k = k % nums.length;

        this.reverse(nums, 0, nums.length-1);
        this.reverse(nums, 0, k-1);
        this.reverse(nums, k, nums.length-1);
    }

    reverse(arr, start, end){
        while(start < end){
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }
}
