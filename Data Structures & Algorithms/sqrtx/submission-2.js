class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let start = 0, end = x;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            let square = mid*mid;
            if(square < x) start = mid+1;
            else if(square > x) end = mid-1;
            else return mid;
        }
        return end;
    }
}
