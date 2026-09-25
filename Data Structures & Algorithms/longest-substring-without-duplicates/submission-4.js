class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // init start, uniqueSet, maxLength
        let start = 0, uniqueSet = new Set(), maxLength = 0;
        // run loop from end=0 to end<s.length
        for(let end=0; end<s.length; end++) {
            // run loop while s[end] exists in uniqueSet
            while(uniqueSet.has(s[end])) {
                // remove s[start] from set
                uniqueSet.delete(s[start]);
                // increment start
                start++;
            }
            // add s[end] to uniqueSet
            uniqueSet.add(s[end]);
            // set maxLength to maximum of maxLength or window size
            maxLength = Math.max(maxLength, end-start+1);
        }

        // return result
        return maxLength;
    }
}
