class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length-1;
        while(start<end){
            while((/[^A-Za-z0-9]/).test(s[start])) start++;
            while((/[^A-Za-z0-9]/).test(s[end])) end--;

            if(start >= end) break;

            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
