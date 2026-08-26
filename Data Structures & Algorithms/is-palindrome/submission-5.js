class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphanumeric = /[a-zA-Z0-9]/;

        let start = 0, end = s.length-1;
        while(start < end) {
            while(!alphanumeric.test(s[start])) start++;
            while(!alphanumeric.test(s[end])) end--;
            if (start < end && s[start].toLowerCase() != s[end].toLowerCase()){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
