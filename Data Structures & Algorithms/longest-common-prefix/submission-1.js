class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // initialize the first string as result
        let result = strs[0];
        // loop over the string array
        for(let i=1;i<strs.length;i++){
            // loop over current string
            for(let j=0;j<result.length;j++){
                // if current character is not equal 
                // to corresponding character in result
                if(result[j]!==strs[i][j]){
                    // update result to substring of matching characters
                    result = result.substring(0,j);
                }
                // if result is empty (no character matched with result)
                // return empty string
                if(!result) return "";
            }
        }
        // return result
        return result;
    }
}
