class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = strs[0];
        for(let i=1;i<strs.length;i++){
            for(let j=0;j<result.length;j++){
                if(result[j]!==strs[i][j]){
                    result = result.substring(0,j);
                    console.log(i, result);
                }
                if(!result) return "";
            }
        }
        return result;
    }
}
