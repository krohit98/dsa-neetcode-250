class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length-1);
        return nums;
    }

    mergeSort(arr, start, end){
        if(start >= end) return;
        let mid=Math.floor((start+end)/2);
        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid+1, end);
        this.merge(arr, start, mid, end)
    }

    merge(arr, start, mid, end){
        let temp = [];
        let i= start;
        let j= mid+1;
        let k = 0;
        while(i<=mid && j<=end){
            if(arr[i] <= arr[j]){
                temp[k] = arr[i];
                i++;
            }
            else{
                temp[k] = arr[j];
                j++;
            }
            k++;
        }
        while(i<=mid) temp[k++] = arr[i++];
        while(j<=end) temp[k++] = arr[j++];

        for(let l=0;l<temp.length;l++){
            arr[start+l] = temp[l];
        }
    }
}
