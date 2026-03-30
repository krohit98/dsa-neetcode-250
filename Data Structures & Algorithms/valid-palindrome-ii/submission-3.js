class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let start = 0;
        let end = s.length-1;
        let isPalindrome = true;
        while(start<end){
            if(s[start]!==s[end]){
                isPalindrome = this.isPalindrome(s,start);
                if(!isPalindrome) isPalindrome = this.isPalindrome(s,end);
                break;
            }
            start++;
            end--;
        }
        return isPalindrome;
    }

    isPalindrome(s,deleteIndex){
        const modified = s.slice(0,deleteIndex)+s.slice(deleteIndex+1);
        let start=0;
        let end = modified.length-1;
        while(start<end){
            if(modified[start]!==modified[end]) return false;
            start++;
            end--;
        }
        return true;
    }
}
