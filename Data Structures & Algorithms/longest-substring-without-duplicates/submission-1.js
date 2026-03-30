class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        // initialize set
        let charSet = new Set();
        // initialize result variable and start pointer
        let longest = 0, start = 0;
        
        // run loop till length of string
        for(let end = 0;end<s.length;end++){
            // run loop while s[i] exists in set
            while(charSet.has(s[end])){
                // delete s[i] from set
                charSet.delete(s[start]);
                // increment start pointer
                start++;
            }
            // insert s[i] in set
            charSet.add(s[end]);
            // calculate result as max (result, length of set)
            longest = Math.max(longest, charSet.size)
        }

        // return result
        return longest;

    }
}
