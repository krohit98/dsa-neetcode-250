class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for(let i=0;i<strs.length;i++){
            const charArray = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                charArray[strs[i].charCodeAt(j) - 97]++;
            }
            const charString = charArray.join(',');
            anagrams[charString] ? anagrams[charString].push(strs[i]) : anagrams[charString] = [strs[i]];
        }
        console.log(anagrams);
        return Object.values(anagrams);
    }
}
