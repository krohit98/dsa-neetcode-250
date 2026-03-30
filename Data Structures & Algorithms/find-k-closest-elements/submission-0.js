class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        // TWO POINTER

        // init result to empty array
        let result = new Array();

        // init winStart to 0, winEnd to k
        let winStart = 0;
        let winEnd = k;

        // run loop while winEnd < arr.length
        while(winEnd < arr.length){
            const startDiff = Math.abs(arr[winStart] - x);
            const endDiff = Math.abs(arr[winEnd] - x);
            console.log(startDiff, endDiff, startDiff < endDiff)
            // check if |arr[winStart] - x| < |arr[winEnd] - x|
            if(startDiff < endDiff){
                console.log("inside 1")
                // break out of loop
                break;
            }
            // else if |arr[winStart] - x| == |arr[winEnd] - x| && arr[winStart] < arr[winEnd]
            else if((startDiff == endDiff) && arr[winStart] < arr[winEnd]){
                console.log("inside 2")
                // break out of loop
                break;
            }
            // else, increment winStart and winEnd by 1
            else winStart++; winEnd++;
        }

        console.log(winStart, winEnd);
            
        // run loop from i=winStart to i=winEnd
        for(let i=winStart; i<winEnd; i++){
            // push arr[i] to result
            result.push(arr[i]);
        }

        // return result
        return result;
    }
}
