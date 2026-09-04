class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];
        let substringList = [];

        const backtrack = (start) => {
            if(start == s.length) {
                result.push([...substringList]);
                return;
            }
            for(let i=start;i<s.length;i++) {
                let substring = s.substring(start,i+1);
                if(this.isSubstringPalindrome(substring)) {
                    substringList.push(substring);
                    backtrack(i+1);
                    substringList.pop();
                }
            }

        }

        backtrack(0);
        return result;
    }

    isSubstringPalindrome(substring) {
        let start = 0, end = substring.length-1;
        while(start < end) {
            if(substring[start] != substring[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
