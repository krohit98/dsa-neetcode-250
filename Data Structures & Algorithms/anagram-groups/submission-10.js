class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // init anagramMap
        let anagramMap = {};

        // run loop from i=0 to i<strs.length
        for(let i=0;i<strs.length;i++){
            // init charArray
            let charArray = new Array(26).fill(0);
            // run loop from j=0 to j<strs[i].length
            for(let j=0;j<strs[i].length;j++){
                // increment charArray for character at strs[i][j]
                charArray[strs[i].charCodeAt(j)-97]++;
            }
            let charString = charArray.join(",");
            // if anagramMap contains joined string of charArray
            if(anagramMap[charString]){
                // push strs[i] to anagramMap[character string]
                anagramMap[charString].push(strs[i]);
            }
            // else 
            else{
                // add [strs[i]] to anagramMap[character string]
                anagramMap[charString] = [strs[i]];
            }
        }

        // init a result array
        let resultArray = [];

        // loop over anagramMap
        Object.values(anagramMap).forEach(value => {
            // push value to result array 
            resultArray.push(value);
        })

        // return result array
        return resultArray;
    }
}
