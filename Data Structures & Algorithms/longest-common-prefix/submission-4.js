class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let lcp = strs[0];

        for(let i=1;i<strs.length;i++) {
            let temp = ""
            for(let j=0;j<lcp.length;j++) {
                if(lcp[j] == strs[i][j]){
                    temp += lcp[j];
                }
                else break;
            }
            lcp = temp;
        }

        return lcp;
    }
}
