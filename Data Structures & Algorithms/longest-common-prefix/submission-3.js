class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = strs[0];

        for(let i=1;i<strs.length;i++){
            for(let j=0;j<result.length;j++){
                if(strs[i][j] != result[j]){
                    result = strs[i].substring(0,j);
                }
            }
        }
        return result;
    }
}
