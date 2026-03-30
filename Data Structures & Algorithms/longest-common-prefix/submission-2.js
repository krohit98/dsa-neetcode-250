class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // create result variable and initialize to strs[0]
        let result = strs[0];
        let n = strs.length;
        // run loop from i=1 to i=n-1
        for(let i=1;i<=n-1;i++){
            // initialize tempRes variable to empty string
            let tempRes = "";
            console.log("result: ", result)
            // run loop from j=0 to j=length of result
            for(let j=0;j<=result.length-1;j++){
                // if strs[i][j] === result[j]
                if(strs[i][j] === result[j])
                    // tempRes += result[j]
                    tempRes += result[j];
                // else break
                else break;
            }
            console.log("tempRes: ",tempRes)
            // result = tempRes
            result = tempRes;
        }
        // return result variable
        return result;
    }
}
