/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let start = 1, end = n;

        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let res = guess(mid);
            if(res == -1){
                end = mid-1;
            }
            else if(res == 1){
                start = mid+1;
            }
            else{
                return mid;
            }
        }
    }
}
