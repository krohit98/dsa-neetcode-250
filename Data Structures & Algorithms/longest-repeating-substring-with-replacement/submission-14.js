class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freqArray = new Array(26).fill(0);
        let start = 0, majorityElementCount = 0, result = 0;

        for(let end=0; end<s.length; end++) {
            freqArray[s.charCodeAt(end) - 'A'.charCodeAt(0)]++;
            for(let i=0;i<26;i++){
                majorityElementCount = Math.max(majorityElementCount, freqArray[i]);
            }
            while((end-start+1) - majorityElementCount > k) {
                freqArray[s.charCodeAt(start) - 'A'.charCodeAt(0)]--;
                start++;
            }
            result = Math.max(result, end-start+1);
        }

        return result;
    }
}
