class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // init longestSub to 0
        let longestSub = 0;
        // init freqMap to empty map
        let freqMap = {};
        // init start to 0
        let start = 0;
        // init majority to 0;
        let majority = 0;

        // run loop for end = 0 to end < s.length
        for(let end = 0; end < s.length; end++){
            // add s[end] to freqMap
            freqMap[s[end]] = (freqMap[s[end]] || 0) + 1;
            majority = Math.max(majority, freqMap[s[end]]);
            // run loop while window size - majority is greater than k
            while(((end-start+1) - majority) > k){
                // decrement freqMap[start] by 1
                freqMap[s[start]]--;
                // increment start
                start++;
            }

            // update longestSub as max of longestSub, window size
            longestSub = Math.max(longestSub, (end-start+1));

        }

        // return result
        return longestSub;
    }
}
