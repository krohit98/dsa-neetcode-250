class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        return this.isPalindrome(s, 0, s.length-1, 1);
    }

    isPalindrome(s, start, end, deleteCount) {
        while(start < end) {
            if(s[start] !== s[end]){
                if (!deleteCount) return false;
                else {
                    return this.isPalindrome(s, start+1, end, 0) || this.isPalindrome(s, start, end-1, 0)
                }
            }
            else {
                start++;
                end--;
            }
        }

        return true;
    }
}
