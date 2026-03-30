class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // initialize map to store characters in current window
        let valueInString = new Map();

        // initialize start and end and longest and temp to 0
        let start = 0, end = 0,longest = 0,tempCount = 0;

        // run loop while end < string length
        while(end < s.length){
            // if s[end] exists in map
            if(valueInString.has(s[end]) && valueInString.get(s[end]) >= start){
                let oldStart = start;
                start = valueInString.get(s[end]) + 1;
                // map[s[end]] = end
                valueInString.set(s[end],end);
                // longest = max(longest, temp)
                longest = Math.max(longest, tempCount);
                tempCount = tempCount - (start - oldStart) + 1;
            }
            // else 
            else {
                valueInString.set(s[end], end);
                tempCount++;
            }
            end++;
        }

        // longest = max(longest, temp)
        longest = Math.max(longest, tempCount);

        return longest;

    }
}
