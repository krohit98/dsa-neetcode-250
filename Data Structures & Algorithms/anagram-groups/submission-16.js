class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strsMap = {};

        for(let i=0; i<strs.length; i++) {
            let charArray = new Array(26).fill(0);

            for(let j=0; j<strs[i].length; j++) {
                charArray[strs[i].charCodeAt(j)-97]++;
            }

            let chars = charArray.join(",");

            strsMap[chars] = strsMap[chars] || [];
            strsMap[chars].push(strs[i])
        }

        return Object.values(strsMap);
    }
}
