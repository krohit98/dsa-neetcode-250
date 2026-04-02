class Solution {
/**
 * @param {number[]} nums
 * @return {number[]}
 */
sortArray(nums) {
    this.quickSort(nums, 0, nums.length-1);
    return nums;
}

quickSort(arr, start, end){
    // When start becomes equal to end, it means there is only one element in array
    if(start < end){
        // partitionIdx points at the first element of right sub array
        let partitionIdx = this.partition(arr,start, end);
        // run quick sort on left subarray
        this.quickSort(arr,start,partitionIdx-1);
        // run quick sort on right subarray
        this.quickSort(arr,partitionIdx, end);
    }
}

/*
Hoare Partition
- We do not store just the pivot index, but the actual element value
- The idea is not to just put the pivot in its correct place (as with lomuto partition), but to ensure:
    - Elements less than or equal to pivot value should be before the pivot element (left subarray)
    - Elements greater than or equal to pivot value should be after the pivot element (right subarray)
- We return either the first index of the right subarray (start) or last index of the left subarray (end)
*/
partition(arr,start,end){
    // Consider the middle element as pivot always - this helps avoid worst case (O(n^2)) time complexity
    let pivot = arr[Math.floor((start+end)/2)];
    // run loop while start <= end
    while(start <= end){
        // increment start until start points at a value greater than pivot value
        while(arr[start] < pivot) start++;
        // decrement end until end points at a value lesser than pivot value
        while(arr[end] > pivot) end--;
        // now start points at a greater-than-pivot value and end at a lower-than-pivot value
        // but if the array was already sorted, start can go beyond end
        // so we need to check that start is ether equal or lower than end, before we swap
        if(start <= end){
            // swap arr[start] and arr[end]
            // so now value at start is lower and value at end is greater than pivot (correct order)
            [arr[start],arr[end]] = [arr[end],arr[start]];
            // increment start, decrement end
            start++;
            end--;
        }
    }
    // return start as it is greater than end now
    // and represents the first index of right subarray
    return start;
}
}
