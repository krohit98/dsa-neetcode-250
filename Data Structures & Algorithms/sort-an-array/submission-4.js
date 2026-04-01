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
        if(start < end){
            let partitionIdx = this.partition(arr,start, end);
            this.quickSort(arr,start,partitionIdx-1);
            this.quickSort(arr,partitionIdx, end);
        }
    }

    partition(arr,start,end){
        let pivot = arr[Math.floor((start+end)/2)];
        // run loop while start <= end
        while(start <= end){
            // while arr[start] < pivot, increment start
            while(arr[start] < pivot) start++;
            // while arr[end] > pivot, decrement end
            while(arr[end] > pivot) end--;
            // check if start <= end
            if(start <= end){
                // swap arr[start] and arr[end]
                [arr[start],arr[end]] = [arr[end],arr[start]];
                // increment start, decrement end
                start++;
                end--;
            }
        }
        // return start
        return start;
    }
}
