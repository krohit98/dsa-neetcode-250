class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let res = 0;
        let start = 0;
        for(let end = 0; end<s.length;end++){
            while(charSet.has(s[end])){
                charSet.delete(s[start]);
                start++;
            }
            charSet.add(s[end]);
            res = Math.max(res, end-start+1);
        }
        return res;
    }
}
