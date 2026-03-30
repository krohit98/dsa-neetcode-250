class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums);
        return nums;
    }

    mergeSort(arr){
        let start = 0;
        let end = arr.length-1;
        if(start == end) return;
        let leftArr=[], rightArr=[], mid=Math.floor((start+end)/2);
        let i=0;
        while(i<=mid){
            leftArr[i]=arr[i];
            i++;
        }
        while(i<=end){
            rightArr[i-mid-1]=arr[i];
            i++;
        }

        this.mergeSort(leftArr);
        this.mergeSort(rightArr);
        this.merge(arr, leftArr, rightArr)
    }

    merge(arr, leftArr, rightArr){
        let n = leftArr.length, m = rightArr.length;
        let i=0,j=0,k=0;
        while(i<n && j<m){
            if(leftArr[i] <= rightArr[j]){
                arr[k] = leftArr[i]; 
                i++;
            }
            else{
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }
        while(i<n){
            arr[k] = leftArr[i]; 
            i++;
            k++; 
        }
        while(j<m){
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
}
