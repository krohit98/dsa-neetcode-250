class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // init result to 0
        let result = 0;
        // init winStart to 0
        let winStart = 0;
        // init uniqueChars to new Set
        let uniqueChars = new Set();
        // run loop from winEnd=0 to winEnd<s.length
        for(let winEnd = 0; winEnd < s.length; winEnd++){
            // while s[winEnd] exists in uniqueChars
            while(uniqueChars.has(s[winEnd])){
                // remove s[winStart] from uniqueChars
                uniqueChars.delete(s[winStart])
                // increment winStart by 1
                winStart++;
            }
            // add s[winEnd] to uniqueChars
            uniqueChars.add(s[winEnd]);
            // put result to max of result, uniqueChars.size
            result = Math.max(result, uniqueChars.size);
        }
        // return result
        return result;
    }
}
